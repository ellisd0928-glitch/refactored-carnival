import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING } from '../constants/theme';
import { CATEGORIES, PRAYER_CONTENT } from '../constants/data';

export default function PrayScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.headerGradientTop, COLORS.background]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.3 }}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.headerTitle}>Pray</Text>
        <Text style={styles.headerSubtitle}>All prayers and devotions</Text>

        {CATEGORIES.map((cat) => {
          const content = PRAYER_CONTENT[cat.id];
          return (
            <View key={cat.id} style={styles.section}>
              <TouchableOpacity
                style={styles.sectionHeader}
                onPress={() => navigation.navigate('Category', { categoryId: cat.id })}
              >
                <View style={styles.sectionLeft}>
                  <View style={[styles.sectionIcon, { backgroundColor: cat.color + '25' }]}>
                    <Ionicons name={cat.icon} size={18} color={cat.color} />
                  </View>
                  <Text style={styles.sectionTitle}>{cat.title}</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color={COLORS.textMuted} />
              </TouchableOpacity>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.horizontalScroll}
              >
                {content.sessions.slice(0, 3).map((session) => (
                  <TouchableOpacity
                    key={session.id}
                    style={styles.miniCard}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('Player', { session, color: cat.color })}
                  >
                    <LinearGradient
                      colors={[cat.color + '20', cat.color + '08']}
                      style={styles.miniCardGradient}
                    >
                      <Text style={styles.miniTitle} numberOfLines={2}>{session.title}</Text>
                      <Text style={styles.miniDuration}>{session.duration}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          );
        })}

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    paddingHorizontal: SPACING.lg,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 15,
    color: COLORS.textSecondary,
    paddingHorizontal: SPACING.lg,
    marginTop: 4,
    marginBottom: SPACING.xl,
  },
  section: {
    marginBottom: SPACING.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.md,
  },
  sectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  horizontalScroll: {
    paddingLeft: SPACING.lg,
    paddingRight: SPACING.md,
  },
  miniCard: {
    width: 140,
    borderRadius: 14,
    overflow: 'hidden',
    marginRight: 10,
  },
  miniCardGradient: {
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    height: 90,
    justifyContent: 'space-between',
  },
  miniTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    lineHeight: 19,
  },
  miniDuration: {
    fontSize: 12,
    color: COLORS.textMuted,
    fontWeight: 'normal',
  },
});
