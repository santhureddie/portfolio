// Prefix local images and plain anchor links when hosted at /portfolio/.
// Leave NEXT_PUBLIC_BASE_PATH unset for localhost or a root custom domain.
export function sitePath(path: string): string {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return path.startsWith('/') && !path.startsWith('//') ? `${prefix}${path}` : path;
}

// Replace any artwork here. For your own image, use { src: '/images/name.webp', alt: '...' }.
// atlasIndex is only used for the bundled illustration sheet; omit it for individual images.
export type Artwork = { src: string; alt: string; atlasIndex?: number; position?: string };
const atlas = (atlasIndex: number, alt: string): Artwork => ({ src: '/images/engineering-atlas.png', atlasIndex, alt });
export const images = {
  hardware: atlas(0, 'Exploded ARM64 development board with floating heatsink'),
  voicy: { src: '/images/leasing-call-assistance.png', alt: 'Appointment booking, answered calls, 24/7 assistance and captured call requests supporting leasing-office staff' } as Artwork,
  iot: { src: '/images/iot-infrastructure.png', alt: 'Edge gateways and sensors connected to cloud telemetry and digital twin services' } as Artwork,
  tcs: atlas(2, 'Telecom towers and connected transport network nodes'),
  vb: atlas(3, 'Android phone with a geolocation alert interface'),
  exposys: atlas(4, 'Soil moisture sensor, plant and Arduino monitoring hardware'),
  edge: atlas(5, 'Conceptual Arduino UNO Q style board and microphone'),
  highlighter: atlas(6, 'Browser extension highlighting skills in a job description'),
  munchies: atlas(7, 'Food ordering interface and a freshly prepared meal'),
};
export const profile = {
  name: 'Santhosh Kumar Reddy Jampana', email: 'santhoshkumarreddyjampana@gmail.com',
  linkedin: 'https://www.linkedin.com/in/santhoshjampana/',
  // Add your public URLs here when ready; absent links are hidden.
  github: '', resume: '', location: 'Redwood City, CA',
};
export const oracleSkills = [
  { label: 'Platforms', values: ['ARM64', 'Qualcomm QCS6490', 'Embedded Linux', 'Device Tree', 'BSP Integration', 'Watchdogs'] },
  { label: 'Boot & updates', values: ['UEFI', 'GRUB2', 'BLS', 'initramfs', 'systemd', 'bootc', 'OSTree', 'Greenboot', 'ESP'] },
  { label: 'Containers & delivery', values: ['Git', 'Docker', 'Podman', 'OCI Registries', 'OCI Images', 'GitHub', 'CI/CD'] },
  { label: 'Cloud & distributed', values: ['Oracle Cloud Infrastructure', 'MQTT', 'Event-Driven Systems', 'Microservices'] },
];
export const iotWork = {
  title: 'Connected devices. Coordinated systems.',
  description: 'Developed a prototype of connected-device infrastructure using MQTT and OCI IoT / Digital Twin services, demonstrating secure onboarding, telemetry ingestion and event-driven lifecycle automation.',
  stages: [
    { title: 'Secure onboarding', detail: 'Demonstrated how devices can join a connected environment through a secure onboarding workflow.' },
    { title: 'Telemetry ingestion', detail: 'Used MQTT and OCI services to explore the flow of device telemetry into cloud-connected workflows.' },
    { title: 'Lifecycle automation', detail: 'Explored event-driven workflows and digital twin services for connected-device lifecycle management.' },
  ],
  skills: ['MQTT', 'Oracle Cloud Infrastructure', 'IoT', 'Digital Twin', 'Event-Driven Systems'],
};

export const accomplishments = [
  { title: 'Transactional updates', text: 'Developed Python and Shell workflows to migrate QCS6490 ARM64 devices from DNF-managed root filesystems to bootc/OSTree. Preserved vendor boot assets and verified 61,713 OSTree objects with zero integrity errors.' },
  { title: 'Watchdog protection', text: 'Built two GRUB2 modules in C to arm a 30-second Qualcomm virtual-MMIO watchdog. Configured Device Tree for Linux qcom_wdt takeover, maintaining protection through Greenboot health validation and disarming after successful boot.' },
  { title: 'Automatic recovery', text: 'Combined GRUB retry counters with bootc/OSTree rollback to restore the previous known-good deployment when candidate attempts were exhausted, preserving it as the default across reboots without operator intervention.' },
  { title: 'Debugging at the boundary', text: 'Traced an 18-tick watchdog mismatch to firmware timer quantization. Replaced invalid enable-register readbacks with status-bit checks in C to resolve GRUB watchdog validation failures.' },
  { title: 'Accelerated multimedia', text: 'Integrated the Qualcomm VPU driver, firmware and GStreamer stack on Oracle Linux. Patched the V4L2 plugin in C for linear NV12 buffers, sustaining dual 2560 × 1440 H.264 streams at 30 FPS each.' },
  { title: 'Camera performance', text: 'Raised IMX676 capture from 4.57 to 30 FPS by correlating GStreamer measurements with CamX/ISP SOF traces, isolating sensor-helper discovery failures and correcting versioned runtime bindings across both camera pipelines.' },
  { title: 'Connected edge', text: iotWork.description },
  { title: 'Secure OTA exploration', text: 'Built proof-of-concept workflows using fs-verity, dm-verity, cryptographic signing and trusted boot to evaluate image integrity and secure updates for remote edge devices.' },
];
export const jobs = [
  { id: 'voicy', number: '02', company: 'Voicy Labs', role: 'Software Engineer', dates: 'Feb 2025 — Jul 2025', title: 'More time for the people in front of you.', intro: 'AI-supported front-desk calls for real-estate and leasing offices, helping staff manage more while staying focused on customers.', image: images.voicy, bullets: ['Built Python / FastAPI backend services for AI-supported front-desk call automation in real-estate and leasing offices, connecting live calls with speech recognition, LLM orchestration and speech synthesis.', 'Helped office staff manage incoming calls so they could focus on in-person customers and people who needed additional assistance.', 'Engineered resilient asynchronous workflows with retries, fallbacks and state tracking across multi-turn conversations.', 'Instrumented structured logging and monitoring to identify bottlenecks, reducing end-to-end response latency by 40%.'], metrics: [['40%', 'lower response latency']], skills: ['Voice AI', 'Call Automation', 'STT–LLM–TTS', 'Prompt Engineering', 'Python', 'FastAPI', 'Async Workflows'] },
  { id: 'tcs', number: '03', company: 'Tata Consultancy Services', role: 'Software Engineer', dates: 'May 2021 — Dec 2022', title: 'Networks under test.', intro: 'Building and automating telecom simulations across 5G, LTE and transport nodes.', image: images.tcs, bullets: ['Automated telecom network simulations with Erlang, Python and Shell, reducing development and execution time by 30%.', 'Built scalable Erlang microservices, increasing protocol simulation throughput by 15%.', 'Implemented Jenkins CI/CD and containerized services with Docker and Kubernetes, reducing deployment time by 20%.', 'Diagnosed distributed production issues through log analysis and debugging, contributing to 99% system uptime.'], metrics: [['30%', 'faster simulations'], ['15%', 'more throughput'], ['20%', 'faster deployments']], skills: ['Erlang', 'Python', 'Shell', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD'] },
  { id: 'vb', number: '04', company: 'VB Engineering Pvt Ltd', role: 'Software Developer Intern', dates: 'Sep 2020 — May 2021', title: 'The right alert. In the right place.', intro: 'A geolocation-based Android app that keeps people informed when it matters.', image: images.vb, bullets: ['Designed and launched a geolocation-based alert Android app using Java, Firebase and Google Maps API, achieving 10,000+ downloads.', 'Improved app load times by 35% with SQLite offline data caching.', 'Integrated REST APIs and Firebase Cloud Messaging, improving notification delivery reliability by 15%.'], metrics: [['10,000+', 'app downloads'], ['35%', 'faster app loading']], skills: ['Android Development', 'Java', 'Firebase', 'SQLite', 'REST APIs', 'Google Maps API'] },
  { id: 'exposys', number: '05', company: 'Exposys Data Labs', role: 'IoT Developer', dates: 'May 2020 — Aug 2020', title: 'From soil to signal.', intro: 'Physical sensors. Useful telemetry. A connected view of the world.', image: images.exposys, bullets: ['Developed an Arduino-based soil moisture monitoring system in C++, integrating sensors and I²C communication for real-time readings.', 'Built an MQTT telemetry pipeline to publish readings to Adafruit IO, with backend services for ingestion, remote monitoring and visualization.'], metrics: [], skills: ['Arduino', 'C++', 'I²C', 'MQTT', 'Adafruit IO'] },
];
export const projects = [
  { id: 'edge', title: 'Edge AI Voice Assistant', label: 'ON-DEVICE / OFFLINE', image: images.edge, bullets: ['Built a fully offline conversational agent on ARM64 Debian Linux. Compiled and tuned whisper.cpp, llama.cpp and sherpa-onnx with CPU-thread allocation for resource-constrained hardware.', 'Engineered asynchronous ALSA / PipeWire audio with barge-in and turn detection, keeping capture and playback responsive during local inference.'], skills: ['C++', 'Python', 'Linux', 'ALSA', 'PipeWire'], href: '' },
  { id: 'highlighter', title: 'Skills Highlighter', label: 'BROWSER EXTENSION', image: images.highlighter, bullets: ['Developed an extension that highlights skills in job descriptions using regex patterns.', 'Reduced personal application review time by 40% through browser automation, with cross-browser compatibility and performance optimization.'], skills: ['TypeScript', 'CSS', 'Regex', 'HTML'], href: '' },
  { id: 'munchies', title: 'Munchies', label: 'CLOUD-BASED FOOD ORDERING', image: images.munchies, bullets: ['Built a secure, full-stack SaaS platform with real-time order tracking and role-based access.', 'Reduced backend response latency by 30% through API optimization and efficient indexing. Maintained code quality with comprehensive tests and backend observability.'], skills: ['Django', 'React', 'PostgreSQL', 'AWS', 'TypeScript'], href: '' },
];
