import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4" data-testid="heading-refund-policy">Refund Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: October 2025</p>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <p>
              At Urban Uplink Pvt. Ltd. ("Urban Uplink," "we," "our," or "us"), we are committed to delivering high-quality digital services and ensuring customer satisfaction. This Refund Policy outlines our position regarding payments and refunds. Please read it carefully before making a purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">1. No Refund Policy</h2>
            <p>
              All purchases and payments made to Urban Uplink Pvt. Ltd. are final and non-refundable. Once a transaction is completed — including subscription fees, setup charges, renewals, or one-time payments — no refunds, partial credits, or reversals will be issued for any reason, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Change of mind or discontinued use of our Services</li>
              <li>Failure to use or access the Services after purchase</li>
              <li>Dissatisfaction with features or outcomes that align with service descriptions</li>
            </ul>
            <p>
              We encourage all customers to review our service descriptions, pricing, and terms carefully before committing to any purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Exceptional Circumstances</h2>
            <p>
              While we follow a strict no-refund policy, Urban Uplink Pvt. Ltd. may, at its sole discretion, consider exceptions in specific cases such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Duplicate transactions caused by technical errors</li>
              <li>Verified unauthorized payments made without user consent</li>
            </ul>
            <p>
              Requests for review under these circumstances must be submitted within 7 days of the transaction date to <a href="mailto:admin@urbanuplink.ai" className="text-primary hover:underline" data-testid="link-refund-request-email">admin@urbanuplink.ai</a> with supporting documentation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Subscription Cancellations</h2>
            <p>
              Users may cancel subscriptions at any time through their account settings. Cancellations prevent future renewals but do not qualify for refunds for the remaining period of an active subscription. Access to the Services will remain active until the end of the current billing cycle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Third-Party Payments</h2>
            <p>
              If payments were made through third-party platforms or integrated services (such as app stores or payment gateways), their individual refund or billing policies may apply. Urban Uplink Pvt. Ltd. is not responsible for managing or processing refunds made through such external systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Contact Us</h2>
            <p>
              If you have questions regarding this Refund Policy or believe a billing error has occurred, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:admin@urbanuplink.ai" className="text-primary hover:underline" data-testid="link-contact-email">admin@urbanuplink.ai</a>
            </p>
            <p>We will review all concerns promptly and communicate transparently.</p>
            <p className="mt-6">
              Urban Uplink Pvt. Ltd. reserves the right to amend or update this Refund Policy at any time. Continued use of our Services after changes are posted constitutes acceptance of the latest version.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
