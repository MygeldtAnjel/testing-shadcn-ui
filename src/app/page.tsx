import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { ModeToggle } from '@/components/ButtonToggleDark';

function HomePage () {
  return (
    <>
      <div>HomePage</div>
      <Button variant="default">asd</Button>
      <Button variant="destructive">asd</Button>
      <Button variant="ghost">asd</Button>
      <Button variant="link">asd</Button>
      <Button variant="outline">asd</Button>
      <Button disabled variant="secondary">asd</Button>
      <Link href="/" className={buttonVariants()}>
        go to homepage
      </Link>
      <Calendar />
      <ModeToggle />
    </>
    )
}

export default HomePage;