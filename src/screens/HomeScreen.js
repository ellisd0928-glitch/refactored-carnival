import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING } from '../constants/theme';
import { CATEGORIES, DAILY_PRAYERS, FEATURED_SESSIONS, ROSARY_MYSTERIES } from '../constants/data';

const { width } = Dimensions.get('window');

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
}

function getTodaysMystery() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = days[new Date().getDay()];
  return { day: today, mystery: ROSARY_MYSTERIES[today] };
}

export default function HomeScreen({ navigation }) {
  const greeting = getGreeting();
  const { mystery } = getTodaysMystery();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.headerGradientTop, COLORS.headerGradientBottom, COLORS.background]}
        style={StyleSheet.absoluteFill}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>{greeting}</Text>
            <Text style={styles.subtitle}>What would you like to pray today?</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Ionicons name="person-circle-outline" size={36} color={COLORS.textSecondary} />
          </TouchableOpacity>
        </View>

        {/* Categories Grid */}
        <View style={styles.categoriesGrid}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={styles.categoryCard}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Category', { categoryId: cat.id })}
            >
              <LinearGradient
                colors={[cat.color + '30', cat.color + '10']}
                style={styles.categoryGradient}
              >
                <View style={[styles.categoryIcon, { backgroundColor: cat.color + '25' }]}>
                  <Ionicons name={cat.icon} size={22} color={cat.color} />
                </View>
                <Text style={styles.categoryTitle}>{cat.title}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>

        {/* Today's Mystery */}
        <TouchableOpacity
          style={styles.mysteryBanner}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Category', { categoryId: 'rosary' })}
        >
          <LinearGradient
            colors={[COLORS.rosary + '40', COLORS.rosary + '15']}
            style={styles.mysteryGradientInner}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.mysteryContent}>
              <Ionicons name="flower-outline" size={20} color={COLORS.rosary} />
              <View style={styles.mysteryText}>
                <Text style={styles.mysteryLabel}>Today's Rosary</Text>
                <Text style={styles.mysteryTitle}>{mystery} Mysteries</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={COLORS.textMuted} />
          </LinearGradient>
        </TouchableOpacity>

        {/* Featured Sessions */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>For You</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredScroll}
        >
          {FEATURED_SESSIONS.map((session) => (
            <TouchableOpacity
              key={session.id}
              style={styles.featuredCard}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Player', { session })}
            >
              <LinearGradient
                colors={session.gradient}
                style={styles.featuredGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.featuredDuration}>{session.duration}</Text>
                <View style={styles.featuredBottom}>
                  <Text style={styles.featuredTitle}>{session.title}</Text>
                  <Text style={styles.featuredSubtitle}>{session.subtitle}</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Daily Prayers */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Daily Prayers</Text>
        </View>
        {DAILY_PRAYERS.map((prayer) => (
          <TouchableOpacity
            key={prayer.id}
            style={styles.prayerRow}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Player', { session: prayer })}
          >
            <View style={styles.prayerInfo}>
              <Text style={styles.prayerTitle}>{prayer.title}</Text>
              <Text style={styles.prayerMeta}>{prayer.type}  ·  {prayer.duration}</Text>
            </View>
            <TouchableOpacity
              style={styles.playButton}
              onPress={() => navigation.navigate('Player', { session: prayer })}
            >
              <Ionicons name="play" size={16} color={COLORS.accent} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}

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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.textPrimary,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  profileButton: {
    marginTop: 4,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: SPACING.md,
    gap: 10,
    marginBottom: SPACING.lg,
  },
  categoryCard: {
    width: (width - SPACING.md * 2 - 20) / 3,
    borderRadius: 16,
    overflow: 'hidden',
  },
  categoryGradient: {
    paddingVertical: 18,
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  categoryIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
  mysteryBanner: {
    marginHorizontal: SPACING.lg,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: SPACING.xl,
  },
  mysteryGradientInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.md,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.rosary + '20',
  },
  mysteryContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mysteryText: {
    marginLeft: 12,
  },
  mysteryLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  mysteryTitle: {
    fontSize: 16,
    color: COLORS.textPrimary,
    fontWeight: '600',
    marginTop: 2,
  },
  sectionHeader: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textPrimary,
    letterSpacing: -0.3,
  },
  featuredScroll: {
    paddingLeft: SPACING.lg,
    paddingRight: SPACING.md,
    marginBottom: SPACING.xl,
  },
  featuredCard: {
    width: width * 0.6,
    height: 180,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 12,
  },
  featuredGradient: {
    flex: 1,
    padding: SPACING.md,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    borderRadius: 20,
  },
  featuredDuration: {
    fontSize: 12,
    color: COLORS.textMuted,
    fontWeight: '500',
    alignSelf: 'flex-end',
  },
  featuredBottom: {},
  featuredTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  featuredSubtitle: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  prayerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: SPACING.lg,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.cardBorder,
  },
  prayerInfo: {
    flex: 1,
  },
  prayerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  prayerMeta: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 3,
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
