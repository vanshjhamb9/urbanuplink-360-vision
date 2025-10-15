import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4" data-testid="heading-privacy-policy">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: October 2025</p>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <p>
              Welcome to Urban Uplink Pvt. Ltd. ("Urban Uplink," "we," "our," or "us"). Your privacy is important to us, and we are committed to protecting your personal data. This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using our website or services, you agree to the terms outlined here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
            <p>
              Urban Uplink Pvt. Ltd. provides innovative tools that help creators and businesses build and manage photo galleries, websites, and more.
            </p>
            <p>In this document:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>"Users" refers to customers using our website or platform.</li>
              <li>"Clients" refers to individuals who interact with our Users' sites or services (for example, by viewing or purchasing from a gallery).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
            <p>We collect different types of information depending on how you interact with our platform.</p>
            <p>
              <strong>Account & Client Information:</strong> When you register with us, we collect your name, email address, business name, and website, along with any Client details you share (like their names and emails). If Clients purchase through your gallery, we also collect billing and shipping details.
            </p>
            <p>
              <strong>Log & Usage Data:</strong> We automatically collect technical information including IP address, browser type, device details, and usage patterns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">How We Collect Information</h2>
            <p>We collect information in three ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Directly from you:</strong> When you sign up, manage your profile, or contact us.</li>
              <li><strong>Automatically:</strong> Through cookies, analytics tools, and similar technologies that track site usage.</li>
              <li><strong>From third-party sources:</strong> Including payment processors, analytics, or advertising partners, which may include limited location or engagement data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
            <p>We use your information to provide, improve, and protect our services, and to communicate effectively with you. Specifically, we use it to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Facilitate projects, communication, and payment processing</li>
              <li>Monitor and enhance platform performance</li>
              <li>Verify your identity when needed</li>
              <li>Send updates, feature announcements, or support notices</li>
              <li>Run marketing and referral programs (opt-out available)</li>
              <li>Fulfill legal obligations and respond to requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">How We Share Information</h2>
            <p>We do not sell your data. However, we may share limited information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With trusted service providers (hosting, payments, analytics)</li>
              <li>With your consent or instruction (e.g., sending client galleries)</li>
              <li>In case of business transfers (mergers or acquisitions)</li>
              <li>To comply with laws and protect rights or safety</li>
              <li>For marketing with minimal data shared to networks like Meta or Google (excluding your content)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
            <p>
              We follow industry-standard practices to protect your data from unauthorized access, alteration, or loss. This includes encryption, secure storage, firewalls, and access controls. While no system is completely secure, we continually update our safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data Retention</h2>
            <p>
              We retain your data while your account is active or as needed for services. Some data may be kept temporarily for legal or operational purposes. You may delete your account anytime via your dashboard or by contacting hello@urbanuplink.ai. Deleted data is removed, though anonymized information may remain for analytics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">International Transfers</h2>
            <p>
              Your information may be processed outside your country. Urban Uplink ensures all international transfers comply with recognized protection frameworks such as the EU Standard Contractual Clauses (SCCs) and Canada's PIPEDA to safeguard your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Your Privacy Rights</h2>
            <p>
              You control your data. You can access, correct, delete, or restrict use directly via your account. For help, contact admin@urbanuplink.ai.
            </p>
            <p>If you're in the EEA, we only process your data when:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>You've given consent,</li>
              <li>It's needed to fulfill a contract, or</li>
              <li>We have a legitimate interest that doesn't override your rights.</li>
            </ol>
            <p>
              Clients should contact the User they interacted with directly, as we act only as a processor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact & Grievance</h2>
            <p>If you have questions or concerns, please contact our Grievance Officer:</p>
            <p>
              <strong>Ms. Rekha Krishnamurthy</strong><br />
              Email: <a href="mailto:admin@urbanuplink.ai" className="text-primary hover:underline">admin@urbanuplink.ai</a>
            </p>
            <p>We aim to resolve all privacy-related issues promptly and transparently.</p>
            <p className="mt-6">Thank you for trusting Urban Uplink with your information.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
