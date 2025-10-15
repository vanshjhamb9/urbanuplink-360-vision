import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4" data-testid="heading-terms-of-service">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: October 2025</p>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Welcome to Urban Uplink Pvt. Ltd.</h2>
            <p>
              Thank you for using Urban Uplink Pvt. Ltd. ("Urban Uplink," "we," "our," or "us"). These Terms of Service ("Terms") explain your rights, responsibilities, and the conditions under which you use our website, web application, and related services (collectively, the "Services"). By accessing or using our Services, you agree to these Terms. Please read them carefully. If you do not agree, you should stop using our Services immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Our Services</h2>
            <p>
              Urban Uplink Pvt. Ltd. provides online tools that enable users to create, host, and manage photo galleries, websites, and digital experiences. Our Services may also include integrations with third-party platforms, analytics tools, and payment gateways to enhance your business operations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Account Creation and Responsibilities</h2>
            <p>
              To access certain features, you may need to create an account. You agree to provide accurate, complete, and up-to-date information when registering. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. If you suspect unauthorized access or any security breach, you must notify us immediately at <a href="mailto:admin@urbanuplink.ai" className="text-primary hover:underline" data-testid="link-security-email">admin@urbanuplink.ai</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Acceptable Use</h2>
            <p>You agree to use our Services only for lawful purposes and in accordance with these Terms. You may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Services to distribute unlawful, harmful, or misleading content.</li>
              <li>Interfere with or disrupt the security, functionality, or integrity of the Services.</li>
              <li>Attempt to reverse-engineer, decompile, or copy our software or proprietary technology.</li>
              <li>Use the Services to spam, harass, or violate the rights of others.</li>
              <li>Use automated means to access or collect data from the Services without permission.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Payments and Billing</h2>
            <p>
              Certain features of the Services may require payment. All fees are clearly stated at the time of purchase. By completing a payment, you authorize Urban Uplink Pvt. Ltd. to charge your selected payment method for the agreed amount. All payments are final and non-refundable unless otherwise required by law or stated in a specific service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Third-Party Services and Integrations</h2>
            <p>
              Our Services may integrate with third-party tools (such as Lightroom or Google Workspace). By enabling these integrations, you authorize Urban Uplink Pvt. Ltd. to access and process data as permitted by the third-party's terms and your selected permissions. We are not responsible for the availability, accuracy, or conduct of third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Intellectual Property</h2>
            <p>
              All materials, designs, logos, software, and other intellectual property associated with Urban Uplink Pvt. Ltd. remain our exclusive property or that of our licensors. You retain ownership of your uploaded content but grant Urban Uplink a limited, non-exclusive, royalty-free license to host, display, and process your content solely to provide the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at our discretion if you violate these Terms or engage in activities that may harm the Services, other users, or Urban Uplink. You may also close your account at any time. Upon termination, certain obligations such as outstanding payments, intellectual property rights, and indemnities will continue to apply.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Our collection, use, and protection of personal information are governed by our Privacy Policy, available on our website. By using our Services, you consent to the processing of your personal information as described in that policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Disclaimer of Warranties</h2>
            <p>
              The Services are provided on an 'as-is' and 'as-available' basis. Urban Uplink Pvt. Ltd. makes no guarantees that the Services will be uninterrupted, error-free, or secure. We disclaim all warranties, express or implied, including those of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Urban Uplink Pvt. Ltd. shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use or inability to use the Services. Our total liability for any claim arising under these Terms shall not exceed the amount paid by you, if any, in the 12 months preceding the event giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Urban Uplink Pvt. Ltd., its affiliates, employees, and partners from and against any claims, damages, or expenses arising out of your use of the Services, your content, or your violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Updates to These Terms</h2>
            <p>
              Urban Uplink Pvt. Ltd. may update or modify these Terms from time to time to reflect legal, technical, or operational changes. If changes are significant, we will provide notice via email or through our Services. Continued use of the Services after updates constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">13. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">14. Contact Us</h2>
            <p>For any questions or concerns about these Terms, please contact us at:</p>
            <p>
              <strong>Urban Uplink Pvt. Ltd.</strong><br />
              Email: <a href="mailto:admin@urbanuplink.ai" className="text-primary hover:underline" data-testid="link-contact-email">admin@urbanuplink.ai</a>
            </p>
            <p>We're committed to addressing all inquiries promptly and professionally.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
