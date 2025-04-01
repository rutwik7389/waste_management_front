// document.getElementById("signup-form").addEventListener("submit", async (e) => {
//     e.preventDefault();
    
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     try {
//         const response = await fetch("http://localhost:5000/api/signup", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ name, email, password }),
//         });
    
//         const data = await response.json();
        
//         if (response.ok) {
//             alert(data.message);
//             // Redirect to home page after successful registration
//             window.location.href = "index.html";
//         } else {
//             alert(data.error || "Registration failed");
//         }
//     } catch (error) {
//         console.error(error);
//         alert("An error occurred. Please try again.");
//     }
// });
// Check for logged in user and update the nav on page load




// window.addEventListener("DOMContentLoaded", () => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       document.getElementById("user-info").textContent = `Hi, ${user.name}`;
//     }
//   });
  
//   // --- Sign Up Logic ---
//   const signupForm = document.getElementById("signup-form");
//   if (signupForm) {
//     signupForm.addEventListener("submit", async (e) => {
//       e.preventDefault();
      
//       const name = document.getElementById("name").value;
//       const email = document.getElementById("email").value;
//       const password = document.getElementById("password").value;
  
//       try {
//         const response = await fetch("http://localhost:5000/api/signup", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ name, email, password }),
//         });
    
//         const data = await response.json();
        
//         if (response.ok) {
//           alert(data.message);
//           // Redirect to home page after successful registration
//           window.location.href = "index.html";
//         } else {
//           alert(data.error || "Registration failed");
//         }
//       } catch (error) {
//         console.error(error);
//         alert("An error occurred. Please try again.");
//       }
//     });
//   }
  
//   // --- Sign In Logic ---
//   const signinForm = document.getElementById("signin-form");
//   if (signinForm) {
//     signinForm.addEventListener("submit", async (e) => {
//       e.preventDefault();
  
//       const email = document.getElementById("email").value;
//       const password = document.getElementById("password").value;
  
//       try {
//         const response = await fetch("http://localhost:5000/api/signin", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email, password }),
//         });
  
//         const data = await response.json();
  
//         if (response.ok) {
//           // Save user data in localStorage
//           localStorage.setItem("user", JSON.stringify(data.user));
//           alert(data.message);
//           // Redirect to home page after sign in
//           window.location.href = "index.html";
//         } else {
//           alert(data.error || "Sign in failed");
//         }
//       } catch (error) {
//         console.error(error);
//         alert("An error occurred. Please try again.");
//       }
//     });
//   }
// script.js
window.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userInfo = document.getElementById("user-info");
    const navList = document.querySelector("nav ul");

    if (user) {
        userInfo.textContent = `Hi, ${user.name}`;
        const logoutBtn = document.createElement("button");
        logoutBtn.textContent = "Logout";
        logoutBtn.id = "logout-btn";
        logoutBtn.addEventListener("click", logout);
        userInfo.appendChild(logoutBtn);

        // Hide Sign In & Sign Up links
        document.querySelector("a[href='signup.html']").style.display = "none";
        document.querySelector("a[href='signin.html']").style.display = "none";
    }
});

function logout() {
    localStorage.removeItem("user");
    window.location.href = "signin.html"; // Redirect to Sign In page
}

// --- Sign Up Logic ---
const signupForm = document.getElementById("signup-form");
if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch("http://localhost:5000/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                window.location.href = "signin.html"; // Redirect to Sign In page
            } else {
                alert(data.error || "Registration failed");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred. Please try again.");
        }
    });
}

// --- Sign In Logic ---
const signinForm = document.getElementById("signin-form");
if (signinForm) {
    signinForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch("http://localhost:5000/api/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem("user", JSON.stringify(data.user));
                alert(data.message);
                window.location.href = "index.html";
            } else {
                alert(data.error || "Sign in failed");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred. Please try again.");
        }
    });
}
