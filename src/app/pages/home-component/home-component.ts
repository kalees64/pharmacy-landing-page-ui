import { Component, HostListener } from '@angular/core';
import { HomeHeaderComponent } from '../../components/home-header-component/home-header-component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FadeUpDirectiveOneWay } from '../../shared/directives/fade-up-one-way.directive';
import { FadeUpDirective } from '../../shared/directives/fade-up.directive';

interface HealthCondition {
  icon: string;
  title: string;
  path: string;
}

interface Brand {
  name: string;
  logo: string;
}

interface LabTest {
  id: string;
  name: string;
  description: string;
  testsIncluded: number;
  icon: string;
  price?: number;
  popular?: boolean;
}

interface JourneyStep {
  step: number;
  icon: string;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
  isExpanded: boolean;
}

@Component({
  selector: 'app-home-component',
  imports: [HomeHeaderComponent, CommonModule, FormsModule, FadeUpDirectiveOneWay, FadeUpDirective],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  popularSearches = ['Vitamins', 'Paracetamol', 'Face Mask', 'Sanitizer', 'Glucose'];
  whatsappNumber = '+91-9345247247';
  showAllFaqs = false;
  showButton = false;
  scrollProgress = 0;

  heroFeatures = [
    {
      id: 1,
      title: 'Free Delivery',
      description: 'On orders above ₹999',
      icon: 'ti ti-truck-delivery',
    },
    { id: 2, title: 'Genuine Products', description: '100% authentic', icon: 'ti ti-certificate' },
    { id: 3, title: '24/7 Support', description: 'Always here to help', icon: 'ti ti-headset' },
    { id: 4, title: 'Easy Returns', description: '7-day return policy', icon: 'ti ti-refresh' },
  ];

  quickAccessCards = [
    {
      id: 1,
      title: 'Pharmacy Near You',
      subtitle: 'Find store',
      bgClass: 'bg-red-100  dark:bg-red-500',
      iconBgClass: 'bg-red-500 dark:bg-red-700',
      icon: 'ti ti-map-pin',
    },
    {
      id: 2,
      title: 'Get 20% Off',
      subtitle: 'Up to 50% off',
      bgClass: 'bg-blue-100 dark:bg-blue-500',
      iconBgClass: 'bg-blue-500 dark:bg-blue-700',
      icon: 'ti ti-discount-2',
    },
    {
      id: 3,
      title: 'Doctor Appointment',
      subtitle: 'Find doctor',
      bgClass: 'bg-green-100 dark:bg-green-500',
      iconBgClass: 'bg-green-500 dark:bg-green-700',
      icon: 'ti ti-stethoscope',
    },
    {
      id: 4,
      title: 'Health Insurance',
      subtitle: 'Get covered',
      bgClass: 'bg-yellow-100 dark:bg-yellow-500',
      iconBgClass: 'bg-yellow-500 dark:bg-yellow-700',
      icon: 'ti ti-shield-check',
    },
    {
      id: 5,
      title: 'Lab Tests',
      subtitle: 'Book now',
      bgClass: 'bg-pink-100 dark:bg-pink-500',
      iconBgClass: 'bg-pink-500 dark:bg-pink-700',
      icon: 'ti ti-test-pipe',
    },
  ];

  categories = [
    { id: 1, name: 'Vitamins & Supplements', icon: 'ti ti-pill' },
    { id: 2, name: 'Diabetes Care', icon: 'ti ti-droplet' },
    { id: 3, name: 'Baby Care', icon: 'ti ti-baby-carriage' },
    { id: 4, name: 'Personal Care', icon: 'ti ti-user-heart' },
    { id: 5, name: 'Fitness', icon: 'ti ti-run' },
    { id: 6, name: 'Ayurveda', icon: 'ti ti-leaf' },
    { id: 7, name: 'Nutrition', icon: 'ti ti-apple' },
    { id: 8, name: 'First Aid', icon: 'ti ti-first-aid-kit' },
  ];

  products = [
    {
      id: 1,
      name: 'Vitamin C 1000mg',
      description: '60 tablets',
      price: 349,
      originalPrice: 499,
      discount: 30,
      image: 'https://placehold.co/300x300/00a6a6/white?text=Vitamin+C',
    },
    {
      id: 2,
      name: 'Blood Pressure Monitor',
      description: 'Digital automatic',
      price: 1299,
      originalPrice: 1899,
      discount: 32,
      image: 'https://placehold.co/300x300/0077b6/white?text=BP+Monitor',
    },
    {
      id: 3,
      name: 'Protein Powder',
      description: '1kg chocolate flavor',
      price: 899,
      originalPrice: null,
      discount: null,
      image: 'https://placehold.co/300x300/28a745/white?text=Protein',
    },
    {
      id: 4,
      name: 'Face Mask Pack',
      description: '50 pieces surgical',
      price: 199,
      originalPrice: 299,
      discount: 33,
      image: 'https://placehold.co/300x300/17a2b8/white?text=Face+Mask',
    },
    {
      id: 5,
      name: 'Hand Sanitizer',
      description: '500ml bottle',
      price: 149,
      originalPrice: null,
      discount: null,
      image: 'https://placehold.co/300x300/ffc107/white?text=Sanitizer',
    },
    {
      id: 6,
      name: 'Thermometer Digital',
      description: 'Infrared contactless',
      price: 799,
      originalPrice: 1199,
      discount: 33,
      image: 'https://placehold.co/300x300/dc3545/white?text=Thermometer',
    },
    {
      id: 7,
      name: 'Omega-3 Fish Oil',
      description: '90 capsules',
      price: 599,
      originalPrice: 799,
      discount: 25,
      image: 'https://placehold.co/300x300/6c757d/white?text=Omega+3',
    },
    {
      id: 8,
      name: 'Glucometer Kit',
      description: 'With 50 strips',
      price: 999,
      originalPrice: null,
      discount: null,
      image: 'https://placehold.co/300x300/00a6a6/white?text=Glucometer',
    },
  ];

  banners = [
    {
      id: 1,
      title: 'Flat 25% OFF',
      description: 'On your first medicine order',
      buttonText: 'Order Now',
      bgClass: 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]',
    },
    {
      id: 2,
      title: 'Free Delivery',
      description: 'On orders above ₹999',
      buttonText: 'Shop Now',
      bgClass: 'bg-gradient-to-r from-[var(--color-success)] to-[var(--color-info)]',
    },
  ];

  articles = [
    {
      id: 1,
      title: '10 Tips for Better Sleep',
      excerpt: 'Discover natural ways to improve your sleep quality...',
      category: 'Wellness',
      image: 'https://placehold.co/400x250/00a6a6/white?text=Sleep+Tips',
    },
    {
      id: 2,
      title: 'Understanding Diabetes',
      excerpt: 'Learn about prevention and management strategies...',
      category: 'Health',
      image: 'https://placehold.co/400x250/0077b6/white?text=Diabetes',
    },
    {
      id: 3,
      title: 'Boosting Immunity Naturally',
      excerpt: 'Foods and habits that strengthen your immune system...',
      category: 'Nutrition',
      image: 'https://placehold.co/400x250/28a745/white?text=Immunity',
    },
  ];

  healthConditions: HealthCondition[] = [
    { icon: '💊', title: 'Diabetes Care', path: '/diabetes-care' },
    { icon: '❤️', title: 'Cardiac Care', path: '/cardiac-care' },
    { icon: '🫁', title: 'Stomach Care', path: '/stomach-care' },
    { icon: '💆', title: 'Pain Relief', path: '/pain-relief' },
    { icon: '🫀', title: 'Liver Care', path: '/liver-care' },
    { icon: '🦷', title: 'Oral Care', path: '/oral-care' },
    { icon: '🫁', title: 'Respiratory', path: '/respiratory' },
    { icon: '🩺', title: 'Sexual Health', path: '/sexual-health' },
    { icon: '👴', title: 'Elderly Care', path: '/elderly-care' },
    { icon: '🛡️', title: 'Cold & Immunity', path: '/cold-immunity' },
  ];

  brands: Brand[] = [
    { name: 'Himalaya', logo: 'https://placehold.co/400x250/00a6a6/white?text=Himalaya' },
    { name: 'Cipla', logo: 'https://placehold.co/400x250/FF69B4/white?text=Cipla' },
    { name: 'Dabur', logo: 'https://placehold.co/400x250/0077b6/white?text=Dabur' },
    { name: "Dr. Reddy's", logo: 'https://placehold.co/400x250/28a745/white?text=Dr.Reddy' },
    { name: 'Sun Pharma', logo: 'https://placehold.co/400x250/00a6a6/white?text=SunPharma' },
    { name: 'Abbott', logo: 'https://placehold.co/400x250/FF69B4/white?text=Abbott' },
    { name: 'Pfizer', logo: 'https://placehold.co/400x250/0077b6/white?text=Pfizer' },
    { name: 'Zydus', logo: 'https://placehold.co/400x250/28a745/white?text=Zydus' },
  ];

  journeySteps: JourneyStep[] = [
    {
      step: 1,
      icon: '📱',
      title: 'Open MomVerse',
      description: 'Access your personalized portal',
    },
    {
      step: 2,
      icon: '📋',
      title: 'Choose your stage',
      description: 'Select where you are in your journey',
    },
    {
      step: 3,
      icon: '📖',
      title: 'Your custom guide is ready',
      description: 'Get personalized recommendations',
    },
  ];

  // Popular lab tests
  labTests: LabTest[] = [
    {
      id: '1',
      name: 'CBC Test (Complete Blood Count)',
      description: 'Comprehensive blood analysis',
      testsIncluded: 30,
      icon: '🩸',
      price: 299,
      popular: true,
    },
    {
      id: '2',
      name: 'HbA1c Test (Hemoglobin A1c)',
      description: 'Diabetes monitoring test',
      testsIncluded: 3,
      icon: '💉',
      price: 399,
    },
    {
      id: '3',
      name: 'FBS (Fasting Blood Sugar) Test',
      description: 'Blood glucose level check',
      testsIncluded: 1,
      icon: '🔬',
      price: 199,
      popular: true,
    },
    {
      id: '4',
      name: 'Lipid Profile Test',
      description: 'Cholesterol and triglycerides',
      testsIncluded: 8,
      icon: '❤️',
      price: 499,
    },
    {
      id: '5',
      name: 'Thyroid Profile Test',
      description: 'Complete thyroid function',
      testsIncluded: 3,
      icon: '🦋',
      price: 599,
    },
    {
      id: '6',
      name: 'Vitamin D Test',
      description: 'Check vitamin D levels',
      testsIncluded: 1,
      icon: '☀️',
      price: 799,
    },
  ];

  faqs: FAQ[] = [
    {
      question: 'How to order medicines online from Apollo Pharmacy?',
      answer:
        'You can order medicines online from Apollo Pharmacy by visiting our website or mobile app. Simply search for your medicines, add them to cart, upload your prescription if required, and proceed to checkout. We offer multiple payment options including COD, online payment, and digital wallets.',
      isExpanded: false,
    },
    {
      question: 'Is online medicine delivery safe?',
      answer:
        'Yes, online medicine delivery from Apollo Pharmacy is completely safe. We are a licensed pharmacy with stringent quality control measures. All medicines are sourced directly from manufacturers, stored in temperature-controlled facilities, and delivered in tamper-proof packaging. Our pharmacists verify every prescription before dispensing.',
      isExpanded: false,
    },
    {
      question: 'How do I know if there is a delay in delivery?',
      answer:
        'You will receive real-time updates via SMS and email about your order status. You can also track your order through our website or app. In case of any delays, our customer support team will proactively inform you. You can reach out to us on WhatsApp at +91-9345247247 for immediate assistance.',
      isExpanded: false,
    },
    {
      question: 'Can Apollo Pharmacy provide express delivery?',
      answer:
        'Yes, we offer express delivery in select cities. Express delivery ensures your medicines reach you within 2-4 hours. This service is available for urgent medication needs. The availability and charges vary by location. Please check during checkout or contact our support team for more details.',
      isExpanded: false,
    },
    {
      question: 'How can I buy Apollo Pharmacy products?',
      answer:
        'You can purchase Apollo Pharmacy products through multiple channels: our website, mobile app, by calling our helpline, via WhatsApp at +91-9345247247, or by visiting any of our 5000+ stores nationwide. We also offer subscription services for chronic medication needs.',
      isExpanded: false,
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major payment methods including credit/debit cards, net banking, UPI, digital wallets (Paytm, PhonePe, Google Pay), and Cash on Delivery (COD). We also offer EMI options on orders above ₹3,000.',
      isExpanded: false,
    },
    {
      question: 'Do I need a prescription to order medicines?',
      answer:
        'Prescription medicines require a valid prescription from a registered medical practitioner. You can upload the prescription during checkout. For OTC (Over The Counter) medicines and healthcare products, no prescription is needed. Our pharmacists verify all prescriptions before processing orders.',
      isExpanded: false,
    },
    {
      question: 'What is your return and refund policy?',
      answer:
        'We accept returns within 7 days of delivery for unopened and unused products. Medicines cannot be returned once opened due to safety regulations. For damaged or wrong products, we offer immediate replacement or full refund. Please contact our support team with your order details and images of the product.',
      isExpanded: false,
    },
  ];

  get visibleFaqs(): FAQ[] {
    return this.showAllFaqs ? this.faqs : this.faqs.slice(0, 5);
  }

  toggleFaq(index: number): void {
    const actualIndex = index;
    this.faqs[actualIndex].isExpanded = !this.faqs[actualIndex].isExpanded;
  }

  toggleShowAll(): void {
    this.showAllFaqs = !this.showAllFaqs;
  }

  onWhatsAppClick(): void {
    const phoneNumber = this.whatsappNumber.replace(/\D/g, '');
    const message = encodeURIComponent('Hi! I would like to order medicines from Apollo Pharmacy.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }

  copyWhatsAppNumber(): void {
    navigator.clipboard.writeText(this.whatsappNumber).then(() => {
      alert('WhatsApp number copied to clipboard!');
    });
  }

  onAskApollo(): void {
    console.log('Opening Apollo AI Assistant');
    // Implement AI assistant logic here
  }

  onBeginJourney(): void {
    console.log('Starting journey');
    // Implement journey navigation here
  }

  onLabTestClick(test: LabTest): void {
    console.log('Selected lab test:', test);
    // Implement test booking logic here
  }

  onViewAllTests(): void {
    console.log('Viewing all lab tests');
    // Implement navigation to all tests page
  }

  onConditionClick(condition: HealthCondition): void {
    console.log('Navigating to:', condition.path);
    // Add your navigation logic here
  }

  onBrandClick(brand: Brand): void {
    console.log('Selected brand:', brand.name);
    // Add your brand filter logic here
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show button after scrolling down 300px
    this.showButton = window.pageYOffset > 300;

    // Calculate scroll progress for the circular progress indicator
    const windowHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = (window.pageYOffset / windowHeight) * 100;
  }

  scrollToTop() {
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
