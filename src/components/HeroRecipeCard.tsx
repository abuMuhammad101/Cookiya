import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Clock3, Bookmark, ChefHat } from 'lucide-react-native';
import { colors, spacing, typography, borderRadius, shadows } from '../theme';

type Props = {
  title: string;
  cuisine: string;
  duration: string;
  difficulty: string;
  availability: string;
  image: string;
  onPress?: () => void;
};

export default function HeroRecipeCard({
  title,
  cuisine,
  duration,
  difficulty,
  availability,
  image,
  onPress,
}: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <Pressable style={styles.save}>
        <Bookmark size={18} color={colors.textPrimary ?? '#222'} />
      </Pressable>

      <View style={styles.content}>
        <Text style={styles.category}>{cuisine}</Text>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.row}>
          <View style={styles.pill}>
            <Clock3 size={14} color={colors.primary ?? '#C96'} />
            <Text style={styles.pillText}>{duration}</Text>
          </View>

          <View style={styles.pill}>
            <ChefHat size={14} color={colors.primary ?? '#C96'} />
            <Text style={styles.pillText}>{difficulty}</Text>
          </View>
        </View>

        <View style={styles.availability}>
          <Text style={styles.availabilityLabel}>Ingredients</Text>
          <Text style={styles.availabilityValue}>{availability}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: colors.surface ?? '#fff',
    borderRadius: borderRadius.xl ?? 24,
    overflow:'hidden',
    ...(shadows?.md||{})
  },
  image:{width:'100%',height:220},
  save:{position:'absolute',top:16,right:16,backgroundColor:'rgba(255,255,255,.92)',padding:10,borderRadius:999},
  content:{padding:spacing.lg ?? 20},
  category:{fontSize:typography.caption?.fontSize ?? 12,color:colors.primary ?? '#b76'},
  title:{fontSize:typography.h2?.fontSize ?? 28,fontWeight:'700',color:colors.textPrimary ?? '#222',marginTop:6},
  row:{flexDirection:'row',marginTop:16,gap:12},
  pill:{flexDirection:'row',alignItems:'center',backgroundColor:colors.backgroundSecondary ?? '#f5f5f5',paddingHorizontal:12,paddingVertical:8,borderRadius:999},
  pillText:{marginLeft:6},
  availability:{marginTop:18},
  availabilityLabel:{fontSize:12,color:colors.textSecondary ?? '#777'},
  availabilityValue:{marginTop:4,fontWeight:'600',color:'#2E7D32'}
});
