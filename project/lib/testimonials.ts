export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  quote: string;
  video?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Rajesh Mehta',
    role: 'CEO',
    company: 'Mehta Retail Group',
    image:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    quote:
      'DigitalKeddy transformed our online presence. Within 8 months, our organic traffic grew 320% and online sales doubled. They are an extension of our team, not just a vendor.',
    video: true,
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Director',
    company: 'Luxe Skincare',
    image:
      'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    quote:
      'The team understood our brand from day one. Our ROAS went from 1.8x to 4.5x in one quarter. Their creative and media buying is genuinely world-class.',
  },
  {
    name: 'Vikram Singh',
    role: 'Founder',
    company: 'PropEstate Realty',
    image:
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    quote:
      'We sold out a 120-unit project in 8 months — 340% ROI on ad spend.DigitalKeddy’s hyper-local SEO and lead nurture system are unmatched in real estate.',
    video: true,
  },
  {
    name: 'Anita Desai',
    role: 'CMO',
    company: 'FinEdge Technologies',
    image:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    quote:
      'Compliant, transparent, and results-driven. They doubled our loan applications while keeping every campaign SEBI-compliant. A rare agency that gets fintech.',
  },
  {
    name: 'Arjun Nair',
    role: 'VP Growth',
    company: 'CloudKitchens India',
    image:
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    quote:
      'Tripled our delivery orders in 6 months. Their Zomato and Swiggy optimization, combined with WhatsApp loyalty, changed our unit economics completely.',
  },
  {
    name: 'Sneha Kapoor',
    role: 'Director',
    company: 'Kapoor Legal Associates',
    image:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    quote:
      'As a law firm, we were cautious about marketing.DigitalKeddy built a compliant strategy that doubled our case inquiries without ever crossing bar guidelines.',
  },
  {
    name: 'Karan Malhotra',
    role: 'CEO',
    company: 'StayLux Hotels',
    image:
      'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    quote:
      'We reduced OTA commission dependency by 40% and doubled direct bookings. Their reputation management across TripAdvisor and Google is exceptional.',
    video: true,
  },
  {
    name: 'Deepika Rao',
    role: 'Head of Digital',
    company: 'EduPrime Institute',
    image:
      'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    quote:
      'We filled 95% of our seats through online inquiries. Their admission-cycle campaigns and course-specific SEO are the best we have worked with.',
  },
];
