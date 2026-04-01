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

export default function CategoryScreen({ route, navigation }) {
  const { categoryId } = route.params;
  const category = CATEGORIES.find((c) => c.id === categoryId);
  const content = PRAYER_CONTENT[categoryId];

  if (!category || !content) return null;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[category.color + '25', COLORS.background]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.4 }}
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color={COLORS.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Area */}
        <View style={styles.titleArea}>
          <View style={[styles.iconCircle, { backgroundColor: category.color + '25' }]}>
            <Ionicons name={category.icon} size={32} color={category.color} />
          </View>
          <Text style={styles.title}>{content.title}</Text>
          <Text style={styles.description}>{category.description}</Text>
        </View>

        {/* Sessions List */}
        <View style={styles.sessionsList}>
          {content.sessions.map((session, index) => (
            <TouchableOpacity
              key={session.id}
              style={styles.sessionCard}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Player', { session, color: category.color })}
            >
              <LinearGradient
                colors={[COLORS.card, 'rgba(255,255,255,0.03)']}
                style={styles.sessionGradient}
              >
                <View style={styles.sessionLeft}>
                  <View style={[styles.sessionNumber, { backgroundColor: category.color + '20' }]}>
                    <Text style={[styles.sessionNumberText, { color: category.color }]}>
                      {index + 1}
                    </Text>
                  </View>
                  <View style={styles.sessionInfo}>
                    <Text style={styles.sessionTitle}>{session.title}</Text>
                    <Text style={styles.sessionDescription} numberOfLines={2}>
                      {session.description}
                    </Text>
                    <Text style={styles.sessionDuration}>{session.duration}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={[styles.playBtn, { backgroundColor: category.color + '20' }]}
                  onPress={() => navigation.navigate('Player', { session, color: category.color })}
                >
                  <Ionicons name="play" size={18} color={category.color} />
                </TouchableOpacity>
              </LinearGradient>
            </TouchableOpacity>
          ))}
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
  header: {
    paddingTop: 56,
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.sm,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    paddingHorizontal: SPACING.lg,
  },
  titleArea: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: COLORS.textSecondary,
    marginTop: 6,
    textAlign: 'center',
  },
  sessionsList: {
  },
  sessionCard: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
  },
  sessionGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.md,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  sessionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sessionNumber: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  sessionNumberText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  sessionInfo: {
    flex: 1,
  },
  sessionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 3,
  },
  sessionDescription: {
    fontSize: 13,
    color: COLORS.textSecondary,
    lineHeight: 18,
    marginBottom: 4,
  },
  sessionDuration: {
    fontSize: 12,
    color: COLORS.textMuted,
    fontWeight: 'normal',
  },
  playBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
});
