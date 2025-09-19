import AllCertificate from "@/components/certificates/AllCertificate";
import Connect from "@/components/connect/Connect";
import Nav from "@/components/Nav";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function CertificatesPage() {
  return (
    <BackgroundGradientAnimation>
      <main 
        className="font-pp-telegraf"
      >
        <Nav />
        <AllCertificate />
        <Connect />
      </main>
    </BackgroundGradientAnimation>
  );
}
