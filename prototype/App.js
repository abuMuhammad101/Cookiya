import React, { useEffect, useState, useCallback } from 'react';
import { View, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Fraunces_600SemiBold, Fraunces_400Regular } from '@expo-google-fonts/fraunces';

import { DEFAULT_PANTRY } from './data';
import { buildTodayQueue, getRecipe, missingIngredients } from './logic';
import { storeGet, storeSet } from './storage';
import { COLORS } from './theme';

import { Header, TabBar, Toast } from './components/Chrome';
import DetailSheet from './components/DetailSheet';
import HomeScreen from './screens/HomeScreen';
import KitchenScreen from './screens/KitchenScreen';
import ShoppingScreen from './screens/ShoppingScreen';
import SavedScreen from './screens/SavedScreen';

export default function App() {
  const [fontsLoaded] = useFonts({ Fraunces_600SemiBold, Fraunces_400Regular });

  const [ready, setReady] = useState(false);
  const [view, setView] = useState('home');
  const [pantry, setPantry] = useState(DEFAULT_PANTRY);
  const [customPantry, setCustomPantry] = useState([]);
  const [shopping, setShopping] = useState([]);
  const [saved, setSaved] = useState({});
  const [lang, setLang] = useState('en');
  const [filter, setFilter] = useState('All');
  const [queue, setQueue] = useState([]);
  const [queueDate, setQueueDate] = useState(null);
  const [detailId, setDetailId] = useState(null);
  const [toast, setToast] = useState('');
  const [toastKey, setToastKey] = useState(0);

  // ---- load persisted state ----
  useEffect(() => {
    (async () => {
      const p = await storeGet('pantry');
      const cp = await storeGet('custom-pantry');
      const s = await storeGet('shopping-list');
      const sv = await storeGet('saved-recipes');
      const lg = await storeGet('lang-pref');
      const nextPantry = p ? JSON.parse(p) : DEFAULT_PANTRY;
      setPantry(nextPantry);
      setCustomPantry(cp ? JSON.parse(cp) : []);
      setShopping(s ? JSON.parse(s) : []);
      setSaved(sv ? JSON.parse(sv) : {});
      setLang(lg || 'en');
      const built = buildTodayQueue(nextPantry);
      setQueue(built.queue);
      setQueueDate(built.queueDate);
      setReady(true);
    })();
  }, []);

  const showToast = useCallback((msg) => {
    setToast(msg);
    setToastKey((k) => k + 1);
  }, []);

  // ---- rebuild the deck only once per day, so swiping doesn't get reset ----
  useEffect(() => {
    if (!ready) return;
    const todayKey = new Date().toISOString().slice(0, 10);
    if (queueDate !== todayKey) {
      const built = buildTodayQueue(pantry);
      setQueue(built.queue);
      setQueueDate(built.queueDate);
    }
  }, [ready]);

  // ---- persist on change ----
  useEffect(() => { if (ready) storeSet('pantry', JSON.stringify(pantry)); }, [pantry, ready]);
  useEffect(() => { if (ready) storeSet('custom-pantry', JSON.stringify(customPantry)); }, [customPantry, ready]);
  useEffect(() => { if (ready) storeSet('shopping-list', JSON.stringify(shopping)); }, [shopping, ready]);
  useEffect(() => { if (ready) storeSet('saved-recipes', JSON.stringify(saved)); }, [saved, ready]);
  useEffect(() => { if (ready) storeSet('lang-pref', lang); }, [lang, ready]);

  // ---- handlers ----
  const handleSwipeAway = (id) => {
    setQueue((q) => {
      const next = q.slice();
      const idx = next.indexOf(id);
      if (idx !== -1) next.push(next.splice(idx, 1)[0]);
      return next;
    });
  };
  const handleTogglePantry = (key) => setPantry((p) => ({ ...p, [key]: !p[key] }));
  const handleToggleCustom = (key) =>
    setCustomPantry((list) => list.map((c) => (c.key === key ? { ...c, have: !c.have } : c)));
  const handleRemoveCustom = (key) => setCustomPantry((list) => list.filter((c) => c.key !== key));
  const handleAddPantryFromSearch = (key) => {
    setPantry((p) => ({ ...p, [key]: true }));
    showToast('Added to your kitchen');
  };
  const handleAddCustom = (label) => {
    setCustomPantry((list) => [...list, { key: 'custom-' + Date.now(), label, have: true }]);
    showToast(`Added "${label}" to your kitchen`);
  };
  const handleToggleHeart = (id) => setSaved((s) => ({ ...s, [id]: !s[id] }));
  const handleAddMissing = (recipe) => {
    const missing = missingIngredients(recipe, pantry);
    const existingKeys = new Set(shopping.filter((s) => s.key).map((s) => s.key));
    const newItems = missing
      .filter((m) => !existingKeys.has(m.key))
      .map((m) => ({ id: `i-${m.key}-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`, key: m.key, label: m.label, from: recipe.name, checked: false }));
    if (newItems.length > 0) setShopping((s) => [...s, ...newItems]);
    showToast(newItems.length > 0 ? `Added ${newItems.length} item${newItems.length > 1 ? 's' : ''} to your shopping list` : 'Already on your list');
  };
  const handleShopToggleCheck = (id) => setShopping((s) => s.map((i) => (i.id === id ? { ...i, checked: !i.checked } : i)));
  const handleShopRemove = (id) => setShopping((s) => s.filter((i) => i.id !== id));
  const handleShopAdd = (label) => setShopping((s) => [...s, { id: `x-${Date.now()}`, key: null, label, from: null, checked: false }]);
  const handleMoveToKitchen = () => {
    const checked = shopping.filter((i) => i.checked);
    if (checked.length === 0) return;
    setPantry((p) => {
      const next = { ...p };
      checked.forEach((item) => { if (item.key) next[item.key] = true; });
      return next;
    });
    setShopping((s) => s.filter((i) => !i.checked));
    showToast(`${checked.length} item${checked.length > 1 ? 's' : ''} moved into your kitchen`);
  };

  if (!fontsLoaded || !ready) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={COLORS.spice} size="large" />
      </View>
    );
  }

  const detailRecipe = detailId ? getRecipe(detailId) : null;
  const hasUnchecked = shopping.some((s) => !s.checked);

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar style="dark" />
      <Header view={view} />

      <View style={{ flex: 1 }}>
        {view === 'home' && (
          <HomeScreen
            queue={queue}
            pantry={pantry}
            filter={filter}
            saved={saved}
            onSetFilter={setFilter}
            onOpen={setDetailId}
            onToggleHeart={handleToggleHeart}
            onSwipeAway={handleSwipeAway}
          />
        )}
        {view === 'kitchen' && (
          <KitchenScreen
            pantry={pantry}
            customPantry={customPantry}
            onTogglePantry={handleTogglePantry}
            onToggleCustom={handleToggleCustom}
            onRemoveCustom={handleRemoveCustom}
            onAddPantry={handleAddPantryFromSearch}
            onAddCustom={handleAddCustom}
          />
        )}
        {view === 'shopping' && (
          <ShoppingScreen
            shopping={shopping}
            onToggleCheck={handleShopToggleCheck}
            onRemove={handleShopRemove}
            onAdd={handleShopAdd}
            onMoveToKitchen={handleMoveToKitchen}
          />
        )}
        {view === 'saved' && (
          <SavedScreen saved={saved} pantry={pantry} onOpen={setDetailId} onToggleHeart={handleToggleHeart} />
        )}
      </View>

      <TabBar view={view} hasUnchecked={hasUnchecked} onChange={setView} />
      <Toast key={toastKey} message={toast} />

      <DetailSheet
        visible={!!detailRecipe}
        recipe={detailRecipe}
        pantry={pantry}
        saved={detailRecipe ? !!saved[detailRecipe.id] : false}
        lang={lang}
        shopping={shopping}
        onClose={() => setDetailId(null)}
        onToggleSave={handleToggleHeart}
        onAddMissing={handleAddMissing}
        onSetLang={setLang}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: COLORS.cream },
  loading: { flex: 1, backgroundColor: COLORS.cream, alignItems: 'center', justifyContent: 'center' },
});
