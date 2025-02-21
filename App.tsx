import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, FlatList, Switch, StyleSheet, Animated, ScrollView, SafeAreaView } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
        <SafeAreaView style={{ flex: 1, backgroundColor: darkMode ? '#222' : '#F5F5F5' }}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Animated.View style={[styles.container, darkMode && styles.darkContainer, { opacity: fadeAnim }]}>
              
              {/* Profile Part */}
          <Image 
            source={require('./assets/formal.jpg')} 
            style={[
              styles.profileImage, 
              { borderColor: darkMode ? '#FFD700' : '#2D9CDB' }
            ]} 
          />
          <Text style={[styles.name, darkMode && styles.darkText]}>Shana Faith Valencia</Text>
          <Text style={[styles.bio, darkMode && styles.darkText]}>
          3rd-year BS Computer Science student specializing in Game Development
          </Text>

              {/* Skills Card */}
          <View style={[styles.card, darkMode && styles.darkCard]}>
            <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Skills</Text>
            <FlatList
              data={[
                { id: '1', skill: 'Adobe Photoshop', icon: 'paint-brush' },  
                { id: '2', skill: 'Adobe After Effects', icon: 'video' },    
                { id: '3', skill: 'React', icon: 'react' },
                { id: '4', skill: 'Node.js', icon: 'node-js' },
                { id: '5', skill: 'UI/UX', icon: 'palette' },
              ]}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <FontAwesome5 name={item.icon} size={20} color={darkMode ? '#FFD700' : '#2D9CDB'} />
                  <Text style={[styles.listText, darkMode ? styles.darkText : styles.lightText]}>{item.skill}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>

          {/* Projects Card */}
          <View style={[styles.card, darkMode && styles.darkCard]}>
            <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Projects</Text>
            <FlatList
              data={[
                { id: '1', title: 'Campus Chronicles' },
                { id: '2', title: 'Inventory Management System' },
                { id: '3', title: 'Todo App' },
                { id: '4', title: 'Flappy Bird Game' },
                { id: '5', title: 'Healthy Buddy App' },
              ]}
              renderItem={({ item }) => (
                <Text style={[styles.listText, darkMode ? styles.darkText : styles.lightText]}>{item.title}</Text>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>

          {/* Contact Card */}
          <View style={[styles.card, darkMode && styles.darkCard]}>
            <Text style={[styles.sectionTitle, darkMode && styles.darkText]}>Contact</Text>
            <View style={styles.listItem}>
              <MaterialIcons name="email" size={20} color={darkMode ? '#FFD700' : '#2D9CDB'} />
              <Text style={[styles.listText, darkMode && styles.darkText]}>shanafaithv@gmail.com</Text>
            </View>
            <View style={styles.listItem}>
              <FontAwesome5 name="github" size={20} color={darkMode ? '#FFD700' : '#2D9CDB'} />
              <Text style={[styles.listText, darkMode && styles.darkText]}>github.com/shanavlnc</Text>
            </View>
            <View style={styles.listItem}>
              <FontAwesome5 name="linkedin" size={20} color={darkMode ? '#FFD700' : '#2D9CDB'} />
              <Text style={[styles.listText, darkMode && styles.darkText]}>
                linkedin.com/in/shanafaithdvalencia
              </Text>
            </View>
          </View>

          {/* Theme */}
          <View style={styles.toggleContainer}>
            <Text style={[styles.lightText, darkMode && styles.darkText]}>Dark Mode</Text>
            <Switch value={darkMode} onValueChange={toggleTheme} />
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  darkContainer: {
    backgroundColor: '#222',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    marginBottom: 10,
    borderWidth: 2,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppins_700Bold',
  },
  bio: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  darkCard: {
    backgroundColor: '#333', 
    shadowColor: '#FFF',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Poppins_700Bold',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  listText: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    marginLeft: 10,
  },
  darkText: {
    color: '#FFF',
  },
  lightText: {
    color: '#000',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});