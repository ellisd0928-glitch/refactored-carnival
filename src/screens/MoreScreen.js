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

const MENU_ITEMS = [
  { icon: 'bookmark-outline', label: 'Saved Prayers', screen: null },
  { icon: 'time-outline', label: 'Prayer History', screen: null },
  { icon: 'notifications-outline', label: 'Reminders', screen: null },
  { icon: 'moon-outline', label: 'Sleep Timer', screen: null },
  { icon: 'settings-outline', label: 'Settings', screen: null },
  { icon: 'information-circle-outline', label: 'About Ora', screen: null },
];

export default function MoreScreen() {
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
        <Text style={styles.headerTitle}>More</Text>

        {/* Profile Card */}
        <TouchableOpacity style={styles.profileCard} activeOpacity={0.7}>
          <LinearGradient
            colors={[COLORS.card, 'rgba(255,255,255,0.03)']}
            style={styles.profileGradient}
          >
            <View style={styles.avatar}>
              <Ionicons name="person" size={28} color={COLORS.accent} />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Welcome to Ora</Text>
              <Text style={styles.profileSub}>Sign in to save your progress</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={COLORS.textMuted} />
          </LinearGradient>
        </TouchableOpacity>

        {/* Streak Card */}
        <View style={styles.streakCard}>
          <LinearGradient
            colors={[COLORS.accent + '20', COLORS.accent + '08']}
            style={styles.streakGradient}
          >
            <Ionicons name="flame-outline" size={28} color={COLORS.accent} />
            <View style={styles.streakInfo}>
              <Text style={styles.streakTitle}>Start Your Streak</Text>
              <Text style={styles.streakSub}>Pray daily to build your prayer habit</Text>
            </View>
          </LinearGradient>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          {MENU_ITEMS.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuRow} activeOpacity={0.6}>
              <View style={styles.menuLeft}>
                <Ionicons name={item.icon} size={22} color={COLORS.textSecondary} />
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color={COLORS.textMuted} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Quote */}
        <View style={styles.quoteCard}>
          <Text style={styles.quoteText}>
            "Pray as though everything depended on God. Work as though everything depended on you."
          </Text>
          <Text style={styles.quoteAuthor}>— St. Augustine</Text>
        </View>

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
    paddingHorizontal: SPACING.lg,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    letterSpacing: -0.5,
    marginBottom: SPACING.lg,
  },
  profileCard: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: SPACING.md,
  },
  profileGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.md,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  profileSub: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  streakCard: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: SPACING.xl,
  },
  streakGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.md,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.accent + '15',
  },
  streakInfo: {
    marginLeft: 14,
    flex: 1,
  },
  streakTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  streakSub: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  menuSection: {
    marginBottom: SPACING.xl,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.cardBorder,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuLabel: {
    fontSize: 16,
    color: COLORS.textPrimary,
    fontWeight: 'normal',
    marginLeft: 14,
  },
  quoteCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  quoteText: {
    fontSize: 15,
    color: COLORS.textSecondary,
    fontStyle: 'italic',
    lineHeight: 24,
    textAlign: 'center',
  },
  quoteAuthor: {
    fontSize: 13,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'normal',
  },
});
