export default function Button() {
    return (
      <div>
        <PremiumButton>Click Me</PremiumButton>
        <PremiumButton variant="outline" size="lg">Large Outline</PremiumButton>
        <PremiumButton isLoading>Loading</PremiumButton>
      </div>
    )
  }