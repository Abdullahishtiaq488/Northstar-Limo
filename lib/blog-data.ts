export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'luxury-travel-tips',
    title: 'The Art of Luxury Travel: Tips from Our Experienced Drivers',
    excerpt: 'Discover expert tips on how to make the most of your luxury ground transportation experience with North Star Limo.',
    content: `
      Luxury travel is more than just reaching your destination—it's about the journey itself. At North Star Limo, we've spent over 15 years perfecting the art of providing exceptional ground transportation experiences. Our experienced drivers have shared their top tips for making your travel unforgettable.

      ## Preparation is Key

      The foundation of any great luxury travel experience starts with preparation. Our drivers recommend booking your transportation at least 24 hours in advance to ensure vehicle availability and personalized service. This also allows our team to accommodate any special requests, from specific vehicle preferences to route planning.

      ## Communication Makes All the Difference

      Clear communication with your transportation provider ensures a seamless experience. Let us know your preferences regarding temperature, music selection, and any stops you'd like to make. Our drivers are trained to anticipate your needs while remaining discreet and professional.

      ## Maximize Your Travel Time

      One of the greatest luxuries of hiring a professional driver is the ability to be productive en route. Whether you're preparing for an important meeting, catching up on emails, or simply relaxing, our quiet, comfortable vehicles provide the perfect environment.

      ## Enjoy the Route

      Don't just think of the drive as getting from point A to point B. Our drivers know the best scenic routes and hidden gems throughout Connecticut and New York. Ask about local recommendations—you might discover your new favorite destination!

      ## The Importance of Reliability

      Luxury isn't just about comfort; it's about reliability. At North Star Limo, we track every detail to ensure your vehicle arrives on time, in perfect condition. Your time is valuable, and we respect it.

      Experience the difference that true luxury ground transportation can make on your next journey.
    `,
    author: 'North Star Limo Team',
    date: '2024-06-15',
    category: 'Travel Tips',
    image: '/blog/luxury-travel.jpg',
    readTime: '5 min read'
  },
  {
    id: 'corporate-transportation-guide',
    title: 'Corporate Transportation: Elevating Your Business Travel Strategy',
    excerpt: 'Learn how professional ground transportation can enhance your corporate image and improve team productivity.',
    content: `
      In today's competitive business landscape, every detail matters. Your choice of transportation can significantly impact how clients perceive your company and how productive your team remains. Corporate transportation is not just a convenience—it's a strategic business decision.

      ## First Impressions Matter

      When you pick up clients or executives, you're making a statement about your company's standards and attention to detail. Arriving in a luxury vehicle with a professional driver demonstrates that you value excellence in every aspect of your business.

      ## Productivity on Wheels

      Our corporate clients appreciate the mobile office environment our vehicles provide. With comfortable seating, WiFi connectivity, and a professional atmosphere, your team can prepare for meetings, close deals, or debrief on the way to their destination.

      ## Reliability for Critical Events

      Missing an important meeting due to traffic or vehicle issues is not an option. North Star Limo specializes in corporate transportation with GPS tracking, real-time updates, and contingency planning to ensure you're always on time.

      ## Cost-Effective Solutions

      While luxury transportation sounds expensive, many companies find it more cost-effective than managing company vehicles. We handle maintenance, insurance, and driver management so you can focus on your business.

      ## Customized Fleet Options

      Whether you need transportation for a one-on-one client meeting or a team of twenty, we have the right vehicle. From sleek sedans to luxury SUVs and spacious executive vans, our diverse fleet ensures the perfect fit for your corporate needs.

      Partner with North Star Limo to take your corporate transportation strategy to the next level.
    `,
    author: 'Business Solutions Team',
    date: '2024-06-10',
    category: 'Corporate',
    image: '/blog/corporate-travel.jpg',
    readTime: '6 min read'
  },
  {
    id: 'wedding-transportation-planning',
    title: 'Wedding Day Transportation: The Bride\'s Guide to Stress-Free Planning',
    excerpt: 'Everything you need to know about planning perfect ground transportation for your wedding day.',
    content: `
      Your wedding day is one of the most important days of your life. Every detail should be perfect, and transportation is no exception. Coordinating reliable, elegant ground transportation for your wedding party and guests ensures everyone arrives on time and ready to celebrate.

      ## Start Planning Early

      Wedding transportation should be part of your initial planning process. Ideally, book your transportation 3-6 months in advance, especially if your wedding is during peak season (May-October).

      ## Create a Transportation Timeline

      Work with your transportation provider to create a detailed timeline. Include pickup times for the wedding party, arrival times at venues, and shuttle schedules for guests. Our team will handle the logistics so you can focus on enjoying your day.

      ## Choose the Right Vehicles

      Your wedding vehicles should complement your overall aesthetic. Whether you prefer classic elegance or modern luxury, we have options that will photograph beautifully and provide comfortable transportation for your bridal party.

      ## Coordinating Multiple Stops

      Most weddings involve multiple locations: getting ready, ceremony, photos, reception. Our experienced team coordinates all these stops seamlessly, ensuring your transportation timeline flows perfectly with your wedding schedule.

      ## Managing Guest Transportation

      Consider offering transportation for your guests from airports or hotels. This simple gesture ensures everyone arrives safely and allows you to set the tone for your celebration right from the beginning.

      ## Budget Considerations

      Wedding transportation packages can be customized to fit various budgets. Whether you need luxury sedans for the bridal party or shuttle service for guests, we'll work with you to create a solution that fits your needs.

      Let North Star Limo handle your wedding transportation so you can focus on creating unforgettable memories.
    `,
    author: 'Events Team',
    date: '2024-06-05',
    category: 'Weddings',
    image: '/blog/wedding-transport.jpg',
    readTime: '7 min read'
  },
  {
    id: 'airport-transportation-benefits',
    title: '5 Benefits of Professional Airport Transportation',
    excerpt: 'Why premium airport ground transportation is worth the investment for frequent travelers.',
    content: `
      Air travel is stressful enough without worrying about parking, traffic, or late arrivals. Professional airport transportation eliminates the stress and makes your entire travel experience smoother. Here are five compelling reasons to choose a professional service for your airport transfers.

      ## 1. Reliability and Punctuality

      Missing a flight due to traffic or parking delays is every traveler's nightmare. Professional drivers know all the best routes and always account for traffic conditions. GPS tracking and real-time communication mean you'll arrive at the airport with time to spare.

      ## 2. Comfort and Luxury

      Begin and end your trip in comfort. After a long flight, sinking into a luxury vehicle with a professional driver is the perfect way to transition back to daily life. Enjoy climate control, comfortable seating, and a peaceful environment.

      ## 3. Safety and Security

      Professional drivers undergo extensive background checks and training. You can trust that you're in safe hands, and your luggage will be handled with care. Let someone else handle the driving while you relax.

      ## 4. Productivity Time

      Use your airport transfer time productively. Catch up on emails, prepare for meetings, or simply unwind before your flight. It's time that would otherwise be wasted on driving and parking.

      ## 5. Cost-Effective When You Factor In All Expenses

      Consider the total cost: airport parking, gas, vehicle maintenance, and your time. Professional transportation is often more economical when you calculate all these factors.

      Make your next airport transfer stress-free with North Star Limo's professional service.
    `,
    author: 'Travel Team',
    date: '2024-05-28',
    category: 'Airport Transfers',
    image: '/blog/airport-transfer.jpg',
    readTime: '4 min read'
  },
  {
    id: 'fleet-highlights-2024',
    title: 'Our 2024 Fleet: Premium Vehicles for Every Occasion',
    excerpt: 'Discover our latest collection of luxury vehicles and find the perfect fit for your transportation needs.',
    content: `
      At North Star Limo, our fleet is carefully curated to meet every transportation need. From intimate business meetings to large group events, we have the perfect vehicle. Let's explore our 2024 collection of premium vehicles.

      ## Executive Luxury Sedans

      Perfect for one-on-one business meetings or couples' outings, our luxury sedans offer sleek elegance and sophisticated comfort. Equipped with premium sound systems, climate control, and smooth suspension technology, they're ideal for executive transportation.

      ## Spacious SUVs

      For groups requiring flexibility and comfort, our luxury SUVs offer the perfect balance. With ample cargo space and luxurious interiors, they're ideal for airport transfers, family events, or small business groups.

      ## Party Vehicles and Hummer Limousines

      Planning something special? Our party vehicles and hummer limousines come equipped with LED lighting, premium sound systems, and customizable interiors. Perfect for celebrations, bachelor/bachelorette parties, and special occasions.

      ## Executive Vans and Shuttles

      For larger groups or day-long events, our executive vans and shuttle services provide comfort for everyone. All vehicles include professional drivers trained in group dynamics and customer service excellence.

      ## Wheelchair-Accessible Vehicles

      Everyone deserves premium transportation. Our fully equipped wheelchair-accessible vehicles ensure comfort and dignity for all passengers.

      ## Event Coordination

      Whether you need multiple vehicles coordinated for a large event or specialized transportation for a unique occasion, our team has the experience and resources to make it happen.

      Contact us today to reserve the perfect vehicle for your next journey or event.
    `,
    author: 'Fleet Team',
    date: '2024-05-20',
    category: 'Fleet',
    image: '/blog/fleet-2024.jpg',
    readTime: '5 min read'
  },
  {
    id: 'customer-stories',
    title: 'North Star Limo Customer Stories: Real Experiences, Real Excellence',
    excerpt: 'Read how North Star Limo has made a difference in our customers\' special moments and business travels.',
    content: `
      The true measure of our service isn't in our fleet or our experience—it's in the stories of our customers. Here are some real experiences that showcase why North Star Limo is Connecticut and New York's premier ground transportation service.

      ## The Perfect Wedding Day

      "We were nervous about coordinating transportation for 150 wedding guests from multiple hotels and airports. North Star Limo took all the stress away. Our bridal party felt pampered, our guests arrived safely and on time, and our photographer loved the beautiful vehicles in our shots. It was flawless." - Sarah M., Bride

      ## Business Excellence

      "I've used North Star Limo for executive transportation for five years. Reliability, professionalism, and attention to detail are unmatched. My clients are always impressed, and my team appreciates the productive environment during airport transfers. North Star is worth every penny." - Michael R., CEO

      ## Unforgettable Bachelor Party

      "Our bachelor party in a luxury hummer limousine was the highlight of the weekend. The professional driver kept us safe while we celebrated, and the customized lighting and sound system created an amazing atmosphere. Every groomsman has been talking about it ever since." - James T., Best Man

      ## Peace of Mind for Family

      "Taking my elderly parents to their anniversary dinner in a luxury sedan gave them joy and made me feel good about their safety. The driver treated them with respect, and they arrived feeling special. It meant the world to me." - Jennifer K., Daughter

      ## Consistent Service Year-Round

      "Whether it's picking up international clients in the middle of winter or coordinating a summer event, North Star Limo always delivers. Their consistency and professionalism have earned my repeat business and my company's trust." - David L., Event Coordinator

      These stories inspire us to continue delivering excellence every single day. Your experience matters to us.
    `,
    author: 'North Star Limo Team',
    date: '2024-05-15',
    category: 'Customer Stories',
    image: '/blog/customer-stories.jpg',
    readTime: '6 min read'
  }
];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getRelatedPosts(currentId: string, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => post.id !== currentId)
    .slice(0, limit);
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getCategories(): string[] {
  return [...new Set(blogPosts.map(post => post.category))];
}
