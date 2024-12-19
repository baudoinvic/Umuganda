

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Dashboard = ({ navigation }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const menuItems = [
    { id: "1", title: "Reports", screen: "Reports", icon: "bar-chart" },
    {
      id: "2",
      title: "Notifications",
      screen: "Notifications",
      icon: "notifications",
    },
    { id: "3", title: "Feedback", screen: "Feedback", icon: "feedback" },
    {
      id: "4",
      title: "Profile/Settings",
      screen: "Profile",
      icon: "settings",
    },
    { id: "5", title: "Logout", screen: "Logout", icon: "logout" },
  ];

  const dashboardCards = [
    { id: "1", title: "Users", count: "120", icon: "people", color: "#4CAF50" },
    { id: "2", title: "Events", count: "120", icon: "event", color: "#2196F3" },
    {
      id: "3",
      title: "History",
      count: "100",
      icon: "history",
      color: "#FF9800",
    },
  ];

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const renderCard = ({ item }) => (
    <View style={[styles.card, { backgroundColor: item.color }]}>
      <Icon name={item.icon} size={32} color="#FFF" />
      <Text style={styles.cardCount}>{item.count}</Text>
      <Text style={styles.cardTitle}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

      {/* Top Bar with Menu Icon */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Icon name="menu" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Dashboard</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Icon name="account-circle" size={28} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <FlatList
          data={dashboardCards}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.cardRow}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Side Menu Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isMenuVisible}
        onRequestClose={toggleMenu}
      >
        <TouchableOpacity
          style={styles.menuOverlay}
          activeOpacity={1}
          onPress={toggleMenu}
        >
          <View style={styles.menuContent}>
            <View style={styles.menuHeader}>
              <Text style={styles.menuTitle}>Menu</Text>
              <TouchableOpacity onPress={toggleMenu}>
                <Icon name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={menuItems}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    setMenuVisible(false);
                    navigation.navigate(item.screen);
                  }}
                >
                  <Icon name={item.icon} size={24} color="#666" />
                  <Text style={styles.menuItemText}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFF",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuButton: {
    padding: 8,
  },
  profileButton: {
    padding: 8,
  },
  topBarTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  mainContent: {
    flex: 1,
    padding: 16,
  },
  cardRow: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    width: "48%",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardCount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 8,
  },
  cardTitle: {
    fontSize: 14,
    color: "#FFF",
    marginTop: 4,
  },
  menuOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  menuContent: {
    width: "80%",
    height: "100%",
    backgroundColor: "#FFF",
    paddingTop: StatusBar.currentHeight,
  },
  menuHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  menuItemText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 16,
  },
});

export default Dashboard;