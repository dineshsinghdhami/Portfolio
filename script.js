
const certificationsRaw = [
  "Strategic SEO & Digital Marketing - PK IT Club",
  "Computer Network & Security Certificate - NAST",
  "Python Programming Internship - CodeAlpha",
  "Web Design Certificate - Code IT Nepal",
  "Git & GitHub Course - Technology Channel",
  "Introduction to Cybersecurity - Cisco Networking Academy",
  "Introduction to Generative AI & Agents - Microsoft Learn",
  "Graphic Designing Training (Unleash Your Creativity) - Code for Change Birgunj"
];

const certificationUrls = [
  "https://drive.google.com/file/d/1AchEaI6Dfk22RmH4TxS9q1cQJcA5C0lR/preview",
  "https://drive.google.com/file/d/13fKh1pW06IFeAywrfJZ09uGbTLuXBE7C/preview",
  "https://drive.google.com/file/d/1zfMVL2H7ccHAeusAGKOH2O5A36dV68it/preview",
  "https://drive.google.com/file/d/1BwqvZgO-WPESzCfEeJRD2jO_r6zO5ZBn/preview",
  "https://drive.google.com/file/d/1j22MMx3MTJs0PHph27yk1tN_29IwbHfu/preview",
  "https://drive.google.com/file/d/1qMAov2ShAYrjMB_ySQXyRGTM9kw5f3uy/preview",
  "https://drive.google.com/file/d/1UfIMxY7kUecXSu-6ezFe43TgqunVCXU0/preview",
  "https://drive.google.com/file/d/1Q0SWLNAAXGMu0F5RoV3np1X5s43yLYx7/view?usp=sharing"
];

const certContainer = document.getElementById('brutCertsList');
if (certContainer) {
  certificationsRaw.forEach((cert, index) => {
    const div = document.createElement('div');
    div.className = 'cert-card';
    
    const url = certificationUrls[index] || '#';
    div.innerHTML = `
      <i class="fas fa-shield-alt" style="color:#ff4d4d;"></i>
      <span style="flex: 1;">${cert}</span>
      <a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #ff4d4d; text-decoration: none; margin-left: auto;" onclick="openCertificate(event, '${url}')">
        <i class="fas fa-external-link-alt"></i> 
      </a>
    `;
    certContainer.appendChild(div);
  });
}

// Add this function to open certificate in same page without Google account popup
function openCertificate(event, url) {
  event.preventDefault();
  window.open(url, '_blank');
}

  const darkBtn = document.getElementById('darkModeBrut');
  const bodyEl = document.body;
  if(localStorage.getItem('brutal_theme') === 'dark') {
    bodyEl.classList.add('dark-mode');
    darkBtn.innerText = '☀️ LIGHT MODE';
  } else {
    darkBtn.innerText = '🌙 DARK MODE';
  }
  darkBtn.addEventListener('click', () => {
    bodyEl.classList.toggle('dark-mode');
    const isDark = bodyEl.classList.contains('dark-mode');
    localStorage.setItem('brutal_theme', isDark ? 'dark' : 'light');
    darkBtn.innerText = isDark ? '☀️ LIGHT MODE' : '🌙 DARK MODE';
  });


function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
}

function openDirectEmail() {
  const subject = "Contact From Portfolio";
  const body = "Hi Dinesh, I found your portfolio and would like to connect.";
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  const email = "dineshdhamidn@gmail.com";

  if (isMobileDevice()) {
    window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
  } else {
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`;
    window.open(gmailURL, "_blank");
  }
}