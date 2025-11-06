<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDBGfYHq1TsT36o7lWp6a8Nhm_qkEYJrz0",
    authDomain: "eventify-pro.firebaseapp.com",
    projectId: "eventify-pro",
    storageBucket: "eventify-pro.firebasestorage.app",
    messagingSenderId: "943588824001",
    appId: "1:943588824001:web:b41bab808f7844e99a9540",
    measurementId: "G-YZ4SQ4DYY5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>