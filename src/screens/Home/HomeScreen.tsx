import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {
  SearchBar,
  RecipeCard,
  CategoryChip,
} from '../../components';

import { todaysPick, recommendedRecipes } from '../../data/mockRecipes';
import { categories } from '../../data/categories';

import {
  colors,
  spacing,
  typography,
} from '../../theme';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Greeting */}

        <Text style={styles.greeting}>
          👋 Good Evening
        </Text>

        <Text style={styles.title}>
          What are you cooking today?
        </Text>

        {/* Today's Pick */}

        <Text style={styles.sectionTitle}>
          Today's Pick
        </Text>

        <RecipeCard
          emoji="🍛"
          title="Chicken Karahi"
          time={35}
          difficulty="Easy"
          isReady={true}
         onPress={() => {}}
        />

        {/* Search */}

        <View style={styles.searchContainer}>
          <SearchBar placeholder="Search recipes..." />
        </View>

        {/* Categories */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categories}
        >
          {categories.map((category) => (
            <CategoryChip
              key={category}
              label={category}
            />
          ))}
        </ScrollView>

        {/* Recommended */}

        <Text style={styles.sectionTitle}>
          Recommended For You
        </Text>

        {recommendedRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl,
  },

  greeting: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },

  title: {
    ...typography.h2,
    color: colors.textPrimary,
    marginTop: spacing.xs,
    marginBottom: spacing.xl,
  },

  sectionTitle: {
    ...typography.h4,
    color: colors.textPrimary,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },

  searchContainer: {
    marginTop: spacing.lg,
  },

  categories: {
    paddingVertical: spacing.md,
    gap: spacing.sm,
  },
});