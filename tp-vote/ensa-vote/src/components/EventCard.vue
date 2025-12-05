
<template>
  <div class="event">
    <h3>{{ event.title }}</h3>
    <p>{{ event.description }}</p>
    <p>Date : {{ event.date }}</p>

    <p><b>👍 Yes: {{ event.yesVotes }} | 👎 No: {{ event.noVotes }}</b></p>

    <div class="vote-buttons">
      <button class="btn-primary" @click="vote('yes')">Yes</button>
      <button class="btn-secondary" @click="vote('no')">No</button>
    </div>
  </div>
</template>

<script>
import { auth, db } from "../firebase";
import {
  collection, query, where, addDoc,
  getDocs, updateDoc, doc
} from "firebase/firestore";

export default {
  props: ["event"],
  methods: {
    async vote(type) {
      const userId = auth.currentUser.uid;

      const votesRef = collection(db, "Votes");
      const q = query(
        votesRef,
        where("eventId", "==", this.event.id),
        where("userId", "==", userId)
      );
      const existingVote = await getDocs(q);

      if (!existingVote.empty) {
        return alert("Vous avez déjà voté !");
      }

      await addDoc(votesRef, {
        eventId: this.event.id,
        userId,
        vote: type,
        createdAt: new Date()
      });

      const eventRef = doc(db, "Events", this.event.id);
      await updateDoc(eventRef, {
        yesVotes: type === "yes" ? this.event.yesVotes + 1 : this.event.yesVotes,
        noVotes: type === "no" ? this.event.noVotes + 1 : this.event.noVotes
      });

      alert("Merci pour votre vote !");
    }
  }
};
</script>
