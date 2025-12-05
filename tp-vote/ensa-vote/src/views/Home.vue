
<template>
  <div>
    <Navbar />
    <div class="container">
      <h2>Événements ENSA Safi</h2>

      <EventCard 
        v-for="ev in events"
        :key="ev.id"
        :event="ev"
      />
    </div>
  </div>
</template>

<script>
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

import Navbar from "../components/Navbar.vue";
import EventCard from "../components/EventCard.vue";

export default {
  components: { Navbar, EventCard },
  data() {
    return { events: [] }
  },
  mounted() {
    const eventsRef = collection(db, "Events");
    onSnapshot(eventsRef, (snapshot) => {
      this.events = snapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data()
      }));
    });
  }
};
</script>
