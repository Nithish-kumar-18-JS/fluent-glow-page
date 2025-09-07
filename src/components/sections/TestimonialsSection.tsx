import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    avatar: "SC",
    quote: "English Tutor AI helped me gain confidence in technical presentations. The pronunciation feedback is incredibly accurate!",
    rating: 5
  },
  {
    name: "Miguel Rodriguez",
    role: "Business Analyst",
    avatar: "MR",
    quote: "I went from being nervous about speaking English to leading international meetings. The progress tracking kept me motivated.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Marketing Manager", 
    avatar: "PP",
    quote: "The AI conversations feel so natural. It's like having a patient tutor available 24/7. My fluency improved dramatically.",
    rating: 5
  },
  {
    name: "Ahmed Hassan",
    role: "Student",
    avatar: "AH",
    quote: "Perfect for busy schedules. I practice during my commute and the app adapts to my learning pace perfectly.",
    rating: 5
  },
  {
    name: "Julia Kowalski",
    role: "Designer",
    avatar: "JK",
    quote: "The vocabulary building feature is amazing. I learned 500+ new words in just 2 months with contextual examples.",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Teacher",
    avatar: "DK",
    quote: "As an ESL teacher, I recommend this to all my students. The AI feedback is more detailed than what I can provide in class.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground-landing">What Our</span>{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          <p className="text-xl text-primary-landing max-w-3xl mx-auto">
            Real success stories from learners who transformed their English speaking skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, rotateX: 5 }}
              style={{ perspective: 1000 }}
            >
              <GlassCard className="group relative h-full p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-white mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 ring-2 ring-primary/20">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-feature text-primary-landing font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground-landing text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-primary-landing text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-landing">4.9/5</div>
              <div className="text-sm text-primary-landing">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-landing">50K+</div>
              <div className="text-sm text-primary-landing">Happy Learners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-landing">1M+</div>
              <div className="text-sm text-primary-landing">Conversations</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;