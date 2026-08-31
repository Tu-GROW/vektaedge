import type { Metadata } from 'next';
import { LegalPage, LegalSection } from '../../components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service | Shop Plus by Vektaedge Technologies',
  description: 'Terms of Service governing use of the Shop Plus platform, website, APIs and mobile apps.',
};

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="2026">
      <p>
        Welcome to Shop Plus Platform. We provide a digital loyalty and receipt management platform that
        enables merchants to issue digital receipts, manage loyalty points and rewards, track customer
        engagement, and deliver offers and promotions. By accessing or using our website, mobile apps,
        APIs and related services you agree to these Terms.
      </p>

      <LegalSection heading="1. Acceptance">
        <p>
          If you do not agree, do not use the Service. These Terms, together with our Privacy Policy,
          Acceptable Use Policy and any order forms or merchant agreements, constitute the entire
          agreement between you and the Company.
        </p>
      </LegalSection>

      <LegalSection heading="2. Eligibility">
        <p>
          You must be at least 18 years old or have legal capacity to enter this agreement. Merchants
          represent they are duly organized and authorized to do business in their jurisdictions, and
          that use of the Platform will comply with applicable laws.
        </p>
      </LegalSection>

      <LegalSection heading="3. Definitions">
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Merchant:</strong> a business using the Platform to issue receipts, manage loyalty programs, and interact with customers.</li>
          <li><strong>Customer:</strong> an individual receiving digital receipts, points, rewards or related communications.</li>
          <li><strong>Loyalty Points:</strong> promotional, non-monetary units issued under merchant programs.</li>
          <li><strong>Digital Receipt:</strong> an electronic record of a completed transaction.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Account Registration & Security">
        <p>
          You must provide accurate information, keep credentials confidential, and notify us of any
          unauthorized use. You are responsible for all activity through your account. We may suspend
          accounts for suspected compromise.
        </p>
      </LegalSection>

      <LegalSection heading="5. Services, Fees & Billing">
        <p>
          We provide the Platform on the plans and pricing described on our site or in separate merchant
          agreements. Fees are non-refundable except as expressly stated. We may change fees on notice;
          continued use after notice constitutes acceptance. Users are responsible for taxes applicable
          to their purchases or use.
        </p>
      </LegalSection>

      <LegalSection heading="6. Digital Receipts">
        <p>
          Merchants may issue electronic receipts containing transaction details (merchant name, date,
          items, amount, taxes, points). Digital receipts are for convenience and record-keeping;
          merchants remain responsible for tax and accounting compliance.
        </p>
      </LegalSection>

      <LegalSection heading="7. Loyalty Programs & Points">
        <p>
          Merchants design and operate loyalty programs, including earning rates, tiers, expiration,
          redemption conditions and any fees. Loyalty points:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Are promotional and have no cash value unless expressly stated.</li>
          <li>Are not bank deposits, electronic money or property.</li>
          <li>Are non-transferable and not redeemable for cash except where a merchant permits it.</li>
          <li>May expire per merchant rules and may be forfeited.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="8. Rewards & Redemption">
        <p>
          Rewards are subject to merchant terms (availability, limits, time, location). Redemption
          decisions and fulfillment are merchant responsibilities. Redemptions are final unless required
          otherwise by law.
        </p>
      </LegalSection>

      <LegalSection heading="9. Merchant Responsibilities">
        <p>
          Merchants must: provide accurate transaction data, honor valid rewards, comply with consumer
          protection, tax and other laws, obtain necessary customer consents, and provide product/service
          support. Merchants are solely responsible for the content of their promotions and
          communications.
        </p>
      </LegalSection>

      <LegalSection heading="10. Customer Responsibilities">
        <p>
          Customers must not manipulate point balances, create fraudulent transactions, use false
          identities, abuse referral programs, or attempt unauthorized access. Violations may lead to
          suspension, points revocation and legal action.
        </p>
      </LegalSection>

      <LegalSection heading="11. Fraud, Monitoring & Suspension">
        <p>
          We monitor for fraud and may suspend, restrict or terminate accounts for suspected fraud,
          abuse, or security risks. We may reverse points or void redemptions where abuse is suspected.
        </p>
      </LegalSection>

      <LegalSection heading="12. Communications & Consent">
        <p>
          By using the Service, users consent to receive transactional messages (receipts, security and
          account notices) electronically. Marketing messages require applicable consents; users may opt
          out of marketing communications as provided in the Platform.
        </p>
      </LegalSection>

      <LegalSection heading="13. Privacy & Data Protection">
        <p>
          Our Privacy Policy explains how we collect and use personal data. We process personal data in
          accordance with the Kenyan Data Protection Act, 2019 and applicable laws. Merchants are
          controllers of customer data; the Company acts as a processor for merchant data in accordance
          with our data processing agreement. We implement reasonable technical and organizational
          measures to protect data but cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="14. Data Ownership, Use & Retention">
        <p>
          Merchants own data they submit to the Platform. We may collect aggregated, de-identified data
          for analytics and service improvement. We retain data as described in our policies and as
          required by law. Upon account termination, we may delete data after any retention period
          specified in merchant agreements.
        </p>
      </LegalSection>

      <LegalSection heading="15. Intellectual Property">
        <p>
          The Platform, software, designs, trademarks and content are owned by the Company or its
          licensors. No rights are transferred except the limited license to use the Service as provided
          in these Terms.
        </p>
      </LegalSection>

      <LegalSection heading="16. Third-Party Services & Integrations">
        <p>
          The Platform may integrate with third-party services (payment processors, POS, SMS/email
          providers). Those services are governed by their own terms and privacy practices. We are not
          liable for third-party performance or availability.
        </p>
      </LegalSection>

      <LegalSection heading="17. Security & Backups">
        <p>
          We use industry standard security practices and maintain backups, but you should maintain your
          own backups and not rely solely on the Platform for archival records.
        </p>
      </LegalSection>

      <LegalSection heading="18. Availability & Maintenance">
        <p>
          We aim for high availability but do not guarantee uninterrupted service. We may suspend or
          degrade services for maintenance, security reasons or legal requirements without liability.
        </p>
      </LegalSection>

      <LegalSection heading="19. Warranties & Disclaimers">
        <p>
          To the fullest extent permitted by law, the Service is provided &quot;as is&quot; and &quot;as
          available.&quot; We disclaim all warranties, express or implied, including merchantability,
          fitness for a particular purpose, and non-infringement. We do not warrant that the Service will
          be error-free or meet all requirements.
        </p>
      </LegalSection>

      <LegalSection heading="20. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, the Company and its affiliates will not be liable for
          indirect, incidental, special, consequential or punitive damages, loss of profits, loss of data
          or business interruption. Our aggregate liability for direct damages will not exceed the fees
          paid to the Company by the merchant in the 12 months preceding the claim. This cap does not
          apply to liability arising from gross negligence, wilful misconduct, data protection breaches,
          or bodily injury or death.
        </p>
      </LegalSection>

      <LegalSection heading="21. Indemnification">
        <p>
          You agree to indemnify and hold harmless the Company, its officers, directors and employees
          from claims, losses or liabilities arising from your breach of these Terms, your misuse of the
          Service, or your violation of applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="22. Confidentiality">
        <p>
          Each party will keep confidential the other party&apos;s non-public information marked
          confidential or reasonably understood to be confidential, and will not disclose it except to
          employees, agents or contractors who need access and are bound to confidentiality.
        </p>
      </LegalSection>

      <LegalSection heading="23. Export, Compliance & Prohibited Uses">
        <p>
          You must comply with all applicable Kenyan laws and export control laws. Prohibited uses
          include illegal activities, infringement, harassment, distribution of malware, and any use that
          harms the Platform or other users.
        </p>
      </LegalSection>

      <LegalSection heading="24. Force Majeure">
        <p>
          Neither party is liable for delays or failures due to causes beyond reasonable control (acts of
          God, strikes, government action, network failures).
        </p>
      </LegalSection>

      <LegalSection heading="25. Termination">
        <p>
          We may suspend or terminate accounts for breaches, illegal activity, or security concerns.
          Termination does not relieve you of outstanding payment obligations. Upon termination, access
          may immediately cease and points may be handled per merchant policies.
        </p>
      </LegalSection>

      <LegalSection heading="26. Notices">
        <p>
          Notices to users will be given by email, in-app notification or posted on the Platform. Notices
          to the Company should be sent to admin@vektaedge.tech.
        </p>
      </LegalSection>

      <LegalSection heading="27. Governing Law & Dispute Resolution">
        <p>
          These Terms are governed by the laws of the Republic of Kenya. Parties will first attempt to
          resolve disputes amicably. If unresolved, disputes shall be referred to the Kenyan courts unless
          the parties agree in writing to arbitration; any arbitration will be seated in Kenya and
          conducted in English.
        </p>
      </LegalSection>

      <LegalSection heading="28. Changes to Terms">
        <p>
          We may update these Terms from time to time. We will provide notice of material changes.
          Continued use after notice constitutes acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection heading="29. Severability & Waiver">
        <p>
          If any provision is invalid, the remainder will remain in force. Failure to enforce a provision
          is not a waiver of rights.
        </p>
      </LegalSection>

      <LegalSection heading="30. Children">
        <p>
          The Service is not directed to children under 18. We do not knowingly collect personal data
          from minors; if discovered, we will delete it as required.
        </p>
      </LegalSection>

      <LegalSection heading="31. Contact">
        <p>
          For questions, support or legal notices contact: VEKTAEDGE, admin@vektaedge.tech, 0721880880.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
