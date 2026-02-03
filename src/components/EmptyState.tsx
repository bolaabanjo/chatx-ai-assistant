import { motion } from "framer-motion";
import { MessageSquare, Zap, Shield } from "lucide-react";

export function EmptyState() {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Chat naturally with an AI that understands context",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Real-time streaming responses as you chat",
    },
    {
      icon: Shield,
      title: "Private & Secure",
      description: "Your conversations are not stored",
    },
  ];

  return (
    <div className="flex flex-1 flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <MessageSquare className="h-8 w-8 text-primary" />
        </div>
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">
          Welcome to ChatX
        </h2>
        <p className="mb-8 text-muted-foreground">
          Start a conversation with your AI assistant
        </p>
      </motion.div>

      <div className="grid max-w-2xl gap-4 sm:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="rounded-xl border border-border bg-card/50 p-4 text-center"
          >
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
              <feature.icon className="h-5 w-5 text-foreground" />
            </div>
            <h3 className="mb-1 text-sm font-medium">{feature.title}</h3>
            <p className="text-xs text-muted-foreground">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
