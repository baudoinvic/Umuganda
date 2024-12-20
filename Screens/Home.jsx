// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
// } from "react-native";

// const Home = ({ navigation }) => {
//   const upcomingEvents = [
//     {
//       id: "1",
//       title: "Umuganda Cleaning - Kimironko",
//       date: "Dec 20, 2024",
//       time: "8:00 AM",
//     },
//     {
//       id: "2",
//       title: "Community Planting - Kicukiro",
//       date: "Jan 5, 2025",
//       time: "9:00 AM",
//     },
//     {
//       id: "3",
//       title: "Community Planting - Kacyiru",
//       date: "Jan 5, 2025",
//       time: "9:00 AM",
//     },
//     {
//       id: "4",
//       title: "Community Planting - Gikondo",
//       date: "Jan 5, 2025",
//       time: "9:00 AM",
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcomeText}>Welcome! phionah</Text>
//       <Text style={styles.sectionTitle}>Upcoming Events</Text>

//       <FlatList
//         data={upcomingEvents}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.eventCard}>
//             <Text style={styles.eventTitle}>{item.title}</Text>
//             <Text style={styles.eventDetails}>
//               {item.date} at {item.time}
//             </Text>
//           </View>
//         )}
//       />

     
//       <View style={styles.quickLinks}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate("Task")}
//         >
//           <Text style={styles.buttonText}>Task </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate("Attendance")}
//         >
//           <Text style={styles.buttonText}>Attendance </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate("Participation")}
//         >
//           <Text style={styles.buttonText}>Participation </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f9f9f9",
//     marginTop: 100
//   },
//   welcomeText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginVertical: 10,
//   },
//   eventCard: {
//     padding: 15,
//     backgroundColor: "#ffffff",
//     borderRadius: 10,
//     marginVertical: 5,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   eventTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   eventDetails: {
//     fontSize: 14,
//     color: "#555",
//   },
//   quickLinks: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 15,
//   },
//   button: {
//     flex: 1,
//     padding: 15,
//     marginHorizontal: 5,
//     backgroundColor: "green",
//     borderRadius: 10,
//     margin: 15
//   },
//   buttonText: {
//     color: "#fff",
//     textAlign: "left",
//     fontWeight: "bold",
//     fontSize: 15
//   },
// });

// export default Home;


import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";

const Home = ({ navigation }) => {
  const upcomingEvents = [
    {
      id: "1",
      title: "Umuganda Cleaning - Kimironko",
      date: "Dec 20, 2024",
      time: "8:00 AM",
    },
    {
      id: "2",
      title: "Community Planting - Kicukiro",
      date: "Jan 5, 2025",
      time: "9:00 AM",
    },
    {
      id: "3",
      title: "Community Planting - Kacyiru",
      date: "Jan 5, 2025",
      time: "9:00 AM",
    },
    {
      id: "4",
      title: "Community Planting - Gikondo",
      date: "Jan 5, 2025",
      time: "9:00 AM",
    },
  ];

  const renderEventCard = ({ item }) => (
    <TouchableOpacity style={styles.eventCard}>
      <View style={styles.eventTimeContainer}>
        <Text style={styles.eventDate}>{item.date}</Text>
        <Text style={styles.eventTime}>{item.time}</Text>
      </View>
      <View style={styles.eventDivider} />
      <View style={styles.eventInfo}>
        <Text style={styles.eventTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />

      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.userName}>Phionah!</Text>
      </View>

      <View style={styles.eventsSection}>
        <Text style={styles.sectionTitle}>Upcoming Events</Text>
        <FlatList
          data={upcomingEvents}
          keyExtractor={(item) => item.id}
          renderItem={renderEventCard}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.eventsList}
        />
      </View>

      <View style={styles.quickLinksContainer}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickLinks}>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: "#4CAF50" }]}
            onPress={() => navigation.navigate("Task")}
          >
            <Text style={styles.buttonText}>Tasks</Text>
            <Text style={styles.buttonSubText}>View your tasks</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: "#2196F3" }]}
            onPress={() => navigation.navigate("Attendance")}
          >
            <Text style={styles.buttonText}>Attendance</Text>
            <Text style={styles.buttonSubText}>Mark attendance</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: "#FF9800" }]}
            onPress={() => navigation.navigate("Participation")}
          >
            <Text style={styles.buttonText}>Participation</Text>
            <Text style={styles.buttonSubText}>View history</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },
  userName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  eventsSection: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 16,
  },
  eventsList: {
    paddingBottom: 16,
  },
  eventCard: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    marginBottom: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  eventTimeContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
  },
  eventDate: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4CAF50",
    marginBottom: 4,
  },
  eventTime: {
    fontSize: 12,
    color: "#666",
  },
  eventDivider: {
    width: 1,
    backgroundColor: "#E0E0E0",
    marginRight: 16,
  },
  eventInfo: {
    flex: 1,
    justifyContent: "center",
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  quickLinksContainer: {
    padding: 20,
  },
  quickLinks: {
    flexDirection: "column",
    gap: 12,
  },
  actionButton: {
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  buttonSubText: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 14,
  },
});

export default Home;