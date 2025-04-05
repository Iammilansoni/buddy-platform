# 📚 BUDDY - Academic Marketplace Internship Assignment 

## 📝 Table of Contents  
- [About the Project](#about-the-project)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Testing](#testing)  
- [Deployment](#deployment)  
- [Contributing](#contributing)  
- [Code Standards](#code-standards)  
- [License](#license)  
- [Authors](#authors)  
- [Acknowledgments](#acknowledgments)  

---

## 🏗️ About the Project  
**BUDDY - Academic Marketplace** is an online platform that bridges the gap between **students and tutors** by providing a seamless way to connect, bid on projects, and exchange academic resources. The platform is designed for efficient **assignment management, project bidding, and knowledge sharing** in a structured manner.

---

## ✨ Features  
✅ **Fully Responsive** – Works on all devices  
✅ **Project Bidding System** – Students post projects, and tutors bid  
✅ **Project Management** – Track progress, deadlines, and submissions  
✅ **Real-time Notifications** – Updates on bids, messages, and project progress  
✅ **Advanced Search & Filters** – Find tutors & projects based on criteria  
✅ **Profile Management** – Personalized user profiles  
✅ **Secure Payments** – Handles transactions for completed projects  
✅ **SEO Optimized** – For better search engine visibility  

---

## 🛠️ Tech Stack  

### **Frontend**  
- **Next.js 15 (App Router)**  
- **React 18**  
- **TypeScript**  
- **Tailwind CSS**  
- **Shadcn UI**  
- **Lucide React Icons**  

### **Performance Enhancements**  
- Server Components & Streaming with Suspense  
- Image & Font Optimization  
- Code Splitting & Lazy Loading  

### **Development Tools**  
- **ESLint & Prettier** (Code Formatting)  
- **Husky** (Pre-commit Hooks)  

---

## 📂 Project Structure  

```
buddy-platform/
├── app/                    # Next.js App Router
│   ├── homework/           # Homework & Projects
│   │   ├── auction/        # Project bidding page
│   │   └── my-project/     # User's project management page
│   ├── api/                # API Routes
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
├── components/             # Reusable UI Components
│   ├── ui/                 # Shadcn UI components
│   ├── header.tsx          # Header component
│   ├── sidebar.tsx         # Sidebar component
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── public/                 # Static assets
├── styles/                 # Additional styles
├── types/                  # TypeScript type definitions
├── .env.example            # Example env file
├── .eslintrc.json          # ESLint Configuration
├── .gitignore              # Git Ignore File
├── next.config.mjs         # Next.js Configuration
├── package.json            # Dependencies
├── README.md               # Project Documentation
├── tailwind.config.ts      # Tailwind Configuration
└── tsconfig.json           # TypeScript Configuration
```

---

## 🔧 Installation  

### **Prerequisites**  
Ensure you have the following installed:  
- **Node.js** ≥ 18.17.0  
- **npm**, **yarn**, or **pnpm**  

### **Steps to Install**  
1️⃣ **Clone the Repository**  
```sh
git clone https://github.com/yourusername/buddy-platform.git
cd buddy-platform
```

2️⃣ **Install Dependencies**  
```sh
npm install
# or
yarn install
# or
pnpm install
```

3️⃣ **Setup Environment Variables**  
Create a `.env.local` file in the root directory and configure it:  
```sh
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

4️⃣ **Run the Development Server**  
```sh
npm run dev
# or
yarn dev
# or
pnpm dev
```
Visit **[http://localhost:3000](http://localhost:3000)** to view the application.

---

## 📖 Usage  

### **Main Pages**  
- **🏠 Home:** Dashboard with notifications and recommended projects  
- **🛒 Auction:** Browse and bid on academic projects  
- **📂 My Projects:** Manage ongoing projects  
- **💰 Wallet:** Handle payments & transactions  
- **💬 Messages:** Chat with students/tutors  

### **Key Features**  

#### 📌 **Project Bidding**  
- Students post academic projects with details & deadlines  
- Tutors browse projects and bid accordingly  
- Secure price negotiation system  

#### 📅 **Project Management**  
- Track status: **Auction, In Progress, Completed**  
- Secure file sharing & submission  
- Automatic deadline tracking & alerts  

#### 👤 **User Profiles**  
- Display **academic credentials, specializations,** and **ratings**  
- Portfolio showcasing completed projects  

---

## 🧪 Testing  

Run the test suite:  

```sh
npm test
# or
yarn test
# or
pnpm test
```

---

## 🚀 Deployment  

The project is **optimized for Vercel deployment**:  

1️⃣ Push your code to a **GitHub repository**  
2️⃣ Import the project into **Vercel**  
3️⃣ Configure necessary **environment variables**  
4️⃣ Deploy 🚀  

For **manual deployment**, build the application:  
```sh
npm run build
# or
yarn build
# or
pnpm build
```

---

## 🤝 Contributing  

Contributions are **welcome**! Follow these steps:  

1️⃣ **Fork the repository**  
2️⃣ **Create a feature branch**  
```sh
git checkout -b feature/amazing-feature
```
3️⃣ **Commit changes**  
```sh
git commit -m "Add amazing feature"
```
4️⃣ **Push to the branch**  
```sh
git push origin feature/amazing-feature
```
5️⃣ **Submit a Pull Request**  

---

## 📝 Code Standards  

✔ **Next.js Best Practices**  
✔ **TypeScript for Type Safety**  
✔ **Semantic HTML for Accessibility**  
✔ **Responsive Design**  
✔ **Optimized Images & Assets**  
✔ **Unit Tests for Critical Features**  

---

## 📄 License  

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

👥 Authors
**Milan Soni** - Initial Work @  [Iammilansoni](https://github.com/Iammilansoni)

---

## 🙏 Acknowledgments  

- **Next.js Team** – for an amazing framework  
- **Shadcn UI** – for elegant components  
- **Vercel** – for hosting & deployment  

---

### 🎉 **Thanks for visiting!** If you find this project useful, don't forget to **⭐ star the repository** and **contribute**! 🚀  

