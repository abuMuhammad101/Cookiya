import React, { useState } from 'react';
import { Modal, View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { COLORS, RADII, SHADOW } from '../theme';
import { haveCount, missingIngredients } from '../logic';

export default function DetailSheet({
  visible, recipe, pantry, saved, lang, shopping,
  onClose, onToggleSave, onAddMissing, onSetLang,
}) {
  const [tab, setTab] = useState('ingredients');
  const [playing, setPlaying] = useState(false);

  if (!recipe) return null;

  const { have, total } = haveCount(recipe, pantry);
  const pct = total === 0 ? 1 : have / total;
  const missing = missingIngredients(recipe, pantry);
  const existingKeys = new Set(shopping.filter((s) => s.key).map((s) => s.key));
  const addableMissing = missing.filter((m) => !existingKeys.has(m.key));

  const handleOpen = () => {
    setTab('ingredients');
    setPlaying(false);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onShow={handleOpen}
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose} />
      <View style={styles.sheet}>
        <View style={styles.handle} />
        <View style={styles.head}>
          <View style={styles.emojiBadge}><Text style={{ fontSize: 32 }}>{recipe.emoji}</Text></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{recipe.name}</Text>
            <Text style={styles.metaRow}>⏱ {recipe.time} min  ·  🍽 Serves {recipe.servings}  ·  {recipe.difficulty}</Text>
          </View>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}><Text>✕</Text></TouchableOpacity>
        </View>

        <View style={styles.tabs2}>
          {[['ingredients', 'Ingredients'], ['steps', 'Steps'], ['video', 'Video']].map(([id, label]) => (
            <TouchableOpacity key={id} style={[styles.tab2, tab === id && styles.tab2Active]} onPress={() => setTab(id)}>
              <Text style={[styles.tab2Text, tab === id && styles.tab2TextActive]}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 16 }}>
          {tab === 'ingredients' && (
            <>
              <View style={styles.langToggle}>
                <TouchableOpacity style={[styles.lg, lang === 'en' && styles.lgActive]} onPress={() => onSetLang('en')}>
                  <Text style={[styles.lgText, lang === 'en' && styles.lgTextActive]}>EN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.lg, lang === 'ur' && styles.lgActive]} onPress={() => onSetLang('ur')}>
                  <Text style={[styles.lgText, lang === 'ur' && styles.lgTextActive]}>Roman Urdu</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ingList}>
                {recipe.ingredients.map((ing, idx) => {
                  const shown = lang === 'ur' ? (ing.ur || ing.label) : ing.label;
                  if (ing.staple) {
                    return (
                      <View key={idx} style={styles.ingRow}>
                        <View style={[styles.ingIcon, { backgroundColor: COLORS.turmericLight }]}>
                          <Text style={{ color: COLORS.needText, fontWeight: '800' }}>✓</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.ingName}>{shown}</Text>
                          <Text style={styles.ingQty}>{lang === 'ur' ? 'Ghar mein aam maujood masala' : 'Pantry staple — assumed on hand'}</Text>
                        </View>
                      </View>
                    );
                  }
                  const has = !!pantry[ing.key];
                  return (
                    <View key={idx} style={styles.ingRow}>
                      <View style={[styles.ingIcon, { backgroundColor: has ? COLORS.herbLight : COLORS.spiceLight }]}>
                        <Text style={{ color: has ? COLORS.herb : COLORS.spiceDark, fontWeight: '800' }}>{has ? '✓' : '+'}</Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.ingName}>{shown}</Text>
                        <Text style={styles.ingQty}>{ing.qty || ''}</Text>
                      </View>
                      {!has && <Text style={styles.ingTag}>{lang === 'ur' ? 'chahiye' : 'need'}</Text>}
                    </View>
                  );
                })}
              </View>
            </>
          )}

          {tab === 'steps' && (
            <View style={styles.stepsList}>
              {recipe.steps.map((s, i) => (
                <View key={i} style={styles.stepItem}>
                  <View style={styles.stepNum}><Text style={styles.stepNumText}>{i + 1}</Text></View>
                  <Text style={styles.stepText}>{s}</Text>
                </View>
              ))}
            </View>
          )}

          {tab === 'video' && (
            <View style={styles.videoWrap}>
              <View style={styles.videoCard}>
                {playing ? (
                  <WebView
                    style={{ flex: 1 }}
                    javaScriptEnabled
                    allowsFullscreenVideo
                    mediaPlaybackRequiresUserAction={false}
                    source={{ uri: `https://www.youtube.com/embed/${recipe.videoId}?autoplay=1&rel=0` }}
                  />
                ) : (
                  <TouchableOpacity activeOpacity={0.9} onPress={() => setPlaying(true)} style={{ flex: 1 }}>
                    <Image
                      source={{ uri: `https://img.youtube.com/vi/${recipe.videoId}/hqdefault.jpg` }}
                      style={{ width: '100%', height: '100%' }}
                    />
                    <View style={styles.playBtn}><Text style={{ fontSize: 20, color: COLORS.spiceDark }}>▶</Text></View>
                  </TouchableOpacity>
                )}
              </View>
              <Text style={styles.videoCaption}>{recipe.videoTitle}</Text>
              <TouchableOpacity onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${recipe.videoId}`)}>
                <Text style={styles.ytLink}>Open on YouTube ↗</Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.sourceNote}><Text style={styles.sourceText}>📺 {recipe.source}</Text></View>

          <View style={styles.progressWrap}>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${pct * 100}%` }]} />
            </View>
            <Text style={styles.progressText}>{have} of {total} ingredients already in your kitchen</Text>
          </View>
        </ScrollView>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.btnGhost} onPress={() => onToggleSave(recipe.id)}>
            <Text style={styles.btnGhostText}>{saved ? '♥ Saved' : '♡ Save recipe'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnFill, addableMissing.length === 0 && styles.btnDisabled]}
            disabled={addableMissing.length === 0}
            onPress={() => onAddMissing(recipe)}
          >
            <Text style={styles.btnFillText}>
              {missing.length === 0 ? 'All set — nothing to buy' : `Add ${addableMissing.length} item${addableMissing.length !== 1 ? 's' : ''} to list`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(20,16,12,0.48)' },
  sheet: {
    position: 'absolute', left: 0, right: 0, bottom: 0, maxHeight: '90%',
    backgroundColor: COLORS.cream, borderTopLeftRadius: 28, borderTopRightRadius: 28,
    paddingTop: 8, ...SHADOW,
  },
  handle: { width: 40, height: 5, borderRadius: RADII.pill, backgroundColor: COLORS.border, alignSelf: 'center', marginBottom: 6 },
  head: { flexDirection: 'row', gap: 14, paddingHorizontal: 22, paddingBottom: 12, alignItems: 'flex-start' },
  emojiBadge: { width: 64, height: 64, borderRadius: 20, backgroundColor: COLORS.turmericLight, alignItems: 'center', justifyContent: 'center' },
  title: { fontFamily: 'Fraunces_600SemiBold', fontSize: 22, color: COLORS.ink, marginBottom: 4 },
  metaRow: { fontSize: 12, color: COLORS.muted, fontWeight: '700' },
  closeBtn: { width: 34, height: 34, borderRadius: 17, backgroundColor: COLORS.paper, borderWidth: 1, borderColor: COLORS.border, alignItems: 'center', justifyContent: 'center' },
  tabs2: { flexDirection: 'row', gap: 8, paddingHorizontal: 22, paddingBottom: 12 },
  tab2: { paddingVertical: 9, paddingHorizontal: 16, borderRadius: RADII.pill, borderWidth: 1, borderColor: COLORS.border, backgroundColor: COLORS.paper },
  tab2Active: { backgroundColor: COLORS.ink, borderColor: COLORS.ink },
  tab2Text: { fontSize: 13, fontWeight: '800', color: COLORS.muted },
  tab2TextActive: { color: '#fff' },
  langToggle: { flexDirection: 'row', gap: 6, paddingHorizontal: 22, paddingBottom: 12 },
  lg: { paddingVertical: 6, paddingHorizontal: 14, borderRadius: RADII.pill, borderWidth: 1, borderColor: COLORS.border, backgroundColor: COLORS.paper },
  lgActive: { backgroundColor: COLORS.herb, borderColor: COLORS.herb },
  lgText: { fontSize: 12.5, fontWeight: '800', color: COLORS.muted },
  lgTextActive: { color: '#fff' },
  ingList: { paddingHorizontal: 22 },
  ingRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 11, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  ingIcon: { width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
  ingName: { fontWeight: '700', fontSize: 14.5, color: COLORS.ink },
  ingQty: { fontSize: 12, color: COLORS.muted, fontWeight: '700' },
  ingTag: { fontSize: 10.5, fontWeight: '800', color: COLORS.spiceDark },
  stepsList: { paddingHorizontal: 22 },
  stepItem: { flexDirection: 'row', gap: 12, marginBottom: 16 },
  stepNum: { width: 26, height: 26, borderRadius: 13, backgroundColor: COLORS.ink, alignItems: 'center', justifyContent: 'center' },
  stepNumText: { color: '#fff', fontSize: 12, fontWeight: '800' },
  stepText: { flex: 1, fontSize: 14.5, lineHeight: 21, color: COLORS.ink },
  videoWrap: { paddingHorizontal: 22 },
  videoCard: { width: '100%', aspectRatio: 16 / 9, borderRadius: 18, overflow: 'hidden', backgroundColor: COLORS.ink },
  playBtn: {
    position: 'absolute', top: '50%', left: '50%', marginLeft: -30, marginTop: -30,
    width: 60, height: 60, borderRadius: 30, backgroundColor: 'rgba(255,255,255,0.95)',
    alignItems: 'center', justifyContent: 'center',
  },
  videoCaption: { fontSize: 12.5, color: COLORS.muted, fontWeight: '700', marginTop: 10 },
  ytLink: { fontSize: 12.5, fontWeight: '800', color: COLORS.spiceDark, marginTop: 6 },
  sourceNote: { marginHorizontal: 22, marginTop: 14, padding: 14, backgroundColor: COLORS.herbLight, borderRadius: 16 },
  sourceText: { fontSize: 12.5, color: COLORS.herb, lineHeight: 18, fontWeight: '700' },
  progressWrap: { paddingHorizontal: 22, paddingTop: 14 },
  progressTrack: { height: 8, borderRadius: RADII.pill, backgroundColor: COLORS.border, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: COLORS.spice, borderRadius: RADII.pill },
  progressText: { fontSize: 12, fontWeight: '700', color: COLORS.muted, marginTop: 6 },
  actions: { flexDirection: 'row', gap: 10, paddingHorizontal: 22, paddingVertical: 16 },
  btnGhost: { flex: 1, backgroundColor: COLORS.paper, borderWidth: 1, borderColor: COLORS.border, borderRadius: RADII.pill, padding: 13, alignItems: 'center' },
  btnGhostText: { fontWeight: '800', fontSize: 13.5, color: COLORS.ink },
  btnFill: { flex: 1.4, backgroundColor: COLORS.spice, borderRadius: RADII.pill, padding: 13, alignItems: 'center' },
  btnFillText: { fontWeight: '800', fontSize: 13.5, color: '#fff' },
  btnDisabled: { backgroundColor: COLORS.border },
});
