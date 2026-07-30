<div align="center">

# 💼 Nexus Accountants & Taxation Ltd

### Financial Management Website — React · Vite · Custom CSS3

*"Every client is our only client."*

[![Live Site](https://img.shields.io/badge/Live-nexusaccountants.co.uk-2E7D6B?style=for-the-badge)](https://www.nexusaccountants.co.uk/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](#license)

</div>

---

## 📖 Overview

The official website for **Nexus Accountants & Taxation Ltd**, a UK-based firm delivering accounting, taxation, payroll, and business advisory services. Built to reflect the firm's technology-driven, client-first approach for startups, SMEs, and established businesses across the UK — with a particular strength in the food and hospitality sector (cafés, restaurants, and beyond).

## ✨ Key Features

### 🤝 Client-Focused Approach
Communicates the firm's core philosophy of tailored, one-on-one financial guidance — designed around understanding each business's unique goals and challenges.

### 🧾 Comprehensive Service Presentation
| Service | Description |
|---|---|
| Bookkeeping & Payroll | Day-to-day financial management |
| Annual Statements & Tax Returns | Year-end compliance & filing |
| Business Startup Support | Registration and setup guidance |
| Management Accounts | Strategic planning insight |
| VAT Returns & Consulting | Ongoing compliance support |
| Financial Modeling & M&A | Growth and transaction advisory |

### 🏢 Sector Expertise
Highlights experience across diverse industries, with a spotlight on **food & hospitality**.

### 🌟 Trust & Credibility
- Client testimonials & reviews
- Key performance metrics (years of experience, happy clients)
- Leadership team profiles
- Clear value proposition

### 📚 Practical Resources
- Dedicated FAQ section
- Contact info & business hours
- Xero technology-partner integration
- Clear consultation call-to-actions

## 🛠️ Tech Stack

**Frontend**
- React.js — component-driven UI
- React Router DOM — client-side navigation
- Custom CSS3 — responsive, mobile-first styling
- Font Awesome — iconography

**Build & Performance**
- Vite — fast dev server & builds
- Lazy loading for images & video
- Optimized video playback
- Smooth CSS transitions & scroll-triggered animations

**Content**
- Centralized `Data.jsx` for services, blog posts, and team info

## 📁 Project Structure

```
src/
├── assets/               # Images, videos, and static files
├── components/           # Reusable React components
│   ├── common/            # Shared components (Heading, Back)
│   ├── home/               # Home page components
│   ├── about/               # About page components
│   ├── services/            # Services page components
│   ├── blog/                # Blog page components
│   └── [other components]
├── styles/                # CSS stylesheets
├── data/                  # Static data
├── App.jsx                # Main application
└── main.jsx                # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nexus-accountants.git
cd nexus-accountants

# Install dependencies
npm install
# or
yarn install

# Run the dev server
npm run dev
# or
yarn dev
```

### Build & Preview

```bash
# Production build
npm run build

# Preview the build
npm run preview
```

## ⚙️ Configuration

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
VITE_APP_NAME=Nexus Accountants
```

## ✏️ Content Management

| To update... | Edit... |
|---|---|
| Blog posts | `src/data/Data.jsx` |
| Services | relevant service component |
| Team info | data file |
| Testimonials | data file |

## 📱 Responsive Design

Fully responsive across every device:

| Device | Width | Layout |
|---|---|---|
| Desktop | 1024px+ | Full 3-column grid |
| Tablet | 768px – 1024px | 2-column grid |
| Mobile | 480px – 768px | Single column |
| Small Mobile | < 480px | Single column |

## 🩺 Troubleshooting

<details>
<summary><strong>Images not loading</strong></summary>

- Verify images are in `src/assets/`
- Check import paths in components
- Confirm file names and extensions match
</details>

<details>
<summary><strong>Videos not playing</strong></summary>

- Ensure videos are in MP4 format
- Verify file paths in `Blog.jsx`
- Check video files aren't corrupted
</details>

<details>
<summary><strong>Typewriter animation issues</strong></summary>

- Verify the `typedLines` prop is passed correctly
- Ensure `Sector.jsx` is properly imported
</details>

<details>
<summary><strong>CSS not applying</strong></summary>

- Clear browser cache
- Check CSS import paths
- Verify class names match
</details>

**Coding standards:** functional components with hooks, React best practices, clean & commented code, CSS modules/BEM, consistent formatting.

## 📄 License

This project is **proprietary and confidential**. Unauthorized copying, distribution, or use is strictly prohibited.

© 2024 Nexus Accountants & Taxation Ltd. All rights reserved.

## 📬 Contact

| | |
|---|---|
| 🌐 Website | [nexusaccountants.co.uk](https://www.nexusaccountants.co.uk/) |
| ✉️ Email | imran@nexusaccountants.co.uk |
| 📞 Phone | +44 7540 188918 |
| 🕒 Hours | Mon – Fri, 9am – 5:30pm |
| 📍 Location | United Kingdom |

## 🙏 Acknowledgments

Built to support the mission of Nexus Accountants & Taxation Ltd. Special thanks to the Nexus team for their expertise and dedication to client service, and to HMRC for public resources and guidance.

---

<div align="center">
<sub>Built with React and a commitment to financial clarity.</sub>
</div>
