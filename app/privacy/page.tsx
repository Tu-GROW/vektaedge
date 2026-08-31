import type { Metadata } from 'next';
import { LegalPage, LegalSection } from '../../components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Shop Plus by Vektaedge Technologies',
  description: 'How Vektaedge Technologies (Shop Plus) collects, uses, stores, protects and shares personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy — Shop Plus Platform" lastUpdated="2026">
      <p>
        This Privacy Policy explains how VEKTAEDGE TECHNOLOGIES trading as Shop Plus (&quot;Company&quot;,
        &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses, stores, protects and shares
        personal data when you use our digital receipt, loyalty and related services (the
        &quot;Platform&quot;). We are committed to protecting personal data in accordance with applicable
        law including the Kenyan Data Protection Act, 2019 (DPA) and other relevant regulations.
      </p>

      <LegalSection heading="1. Scope">
        <p>This Policy applies to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Customers (individuals who receive receipts, participate in loyalty programs, or otherwise interact with merchants via the Platform);</li>
          <li>Merchants and merchant administrators who subscribe to or use the Platform; and</li>
          <li>Visitors to our websites and mobile applications.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="2. Data Controller / Data Processor">
        <p>
          Unless otherwise agreed in writing, Merchants determine the purposes and means of processing
          customer personal data and therefore act as Data Controllers in relation to their customers.
        </p>
      </LegalSection>

      <LegalSection heading="3. Personal Data We Collect">
        <p>
          We collect only data necessary to provide the Platform and as specified in merchant agreements.
          Categories include:
        </p>
        <p className="font-bold text-[#15171f]">A. Customer / End-User Data</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Identity: full name, date of birth (if provided), national ID or other identifier (if required by merchant).</li>
          <li>Contact: email, phone number, postal address.</li>
          <li>Account: username, hashed password, profile preferences.</li>
          <li>Transactional: purchase amounts, items purchased, transaction timestamps, store/terminal ID, loyalty points awarded/redemptions, receipts.</li>
          <li>Engagement: program participation, referrals, opt-in/opt-out status, communication preferences.</li>
        </ul>
        <p className="font-bold text-[#15171f]">B. Merchant Data</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Business name, business registration number, trading addresses, contact persons.</li>
          <li>POS integration credentials (securely stored), billing and invoicing details.</li>
        </ul>
        <p className="font-bold text-[#15171f]">C. Device & Technical Data</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>IP address, device identifiers, browser type/version, OS, app version, SDK identifiers, crash logs.</li>
        </ul>
        <p className="font-bold text-[#15171f]">D. Usage & Analytical Data</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Feature usage, pages/screens visited, timestamps, referral sources, aggregated behavioural analytics.</li>
        </ul>
        <p className="font-bold text-[#15171f]">E. Sensitive Data</p>
        <p>
          We do not knowingly collect special categories of personal data (sensitive data) except where
          expressly required and permitted (e.g., identity verification where legally required). If
          sensitive data is required, we will obtain explicit consent and apply additional protections.
        </p>
      </LegalSection>

      <LegalSection heading="4. Sources of Data">
        <ul className="list-disc space-y-2 pl-6">
          <li>Directly from users (registration forms, profile updates, communications).</li>
          <li>From Merchants (transaction feeds).</li>
          <li>Automatically via the Platform (cookies, analytics).</li>
          <li>From third-party service providers where permitted by you or your merchant.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="5. Purposes and Legal Bases for Processing">
        <p>We process personal data only for specified, legitimate purposes:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>To perform the contract with Merchants and Customers (provision of digital receipts, loyalty program administration, fulfilment of redemptions).</li>
          <li>To comply with legal obligations (tax, accounting, anti-fraud, regulatory reporting).</li>
          <li>For legitimate business interests (service improvement, fraud prevention, analytics, security), balanced with data subject rights.</li>
          <li>On consent, where required (marketing communications, promotions, profiling for marketing).</li>
          <li>For other lawful bases specified in merchant agreements or user consents.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="6. Specific Uses">
        <ul className="list-disc space-y-2 pl-6">
          <li>Provide and maintain the Platform, issue receipts, award and redeem loyalty points.</li>
          <li>Authenticate users and secure accounts.</li>
          <li>Customer support and dispute resolution.</li>
          <li>Send transactional communications (receipts, security alerts), and marketing where consented.</li>
          <li>Detect, prevent and investigate fraud, abuse and security incidents.</li>
          <li>Generate anonymized or aggregated analytics for Merchants and internal use.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="7. Cookies and Tracking">
        <p>We use cookies, local storage and similar technologies to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Enable essential platform functionality and session management.</li>
          <li>Analyse usage and performance (analytics cookies).</li>
          <li>Support marketing and personalization (with consent where required).</li>
        </ul>
        <p>
          You can manage or block cookies through your browser or device settings. Blocking cookies may
          affect Platform functionality.
        </p>
      </LegalSection>

      <LegalSection heading="8. Disclosure and Sharing of Personal Data">
        <p>We may share personal data with:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Merchants (transactional and loyalty information relevant to their customers).</li>
          <li>Service providers and sub-processors: cloud hosting, payment processors, communication providers (email/SMS), analytics vendors, support tools. Processors act under contract and only on our instructions.</li>
          <li>Legal or regulatory authorities where required by law, court order or to protect rights and safety.</li>
          <li>Acquirers or other parties in connection with a reorganisation, sale, merger or asset transfer (with notice to affected parties where required).</li>
        </ul>
        <p className="font-bold text-[#15171f]">We do not sell personal data.</p>
      </LegalSection>

      <LegalSection heading="9. International Transfers">
        <p>Data may be transferred or stored outside Kenya. When transfers occur, we implement safeguards such as:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Standard contractual clauses, adequate security measures, or other lawful transfer mechanisms.</li>
          <li>Ensuring sub-processors meet equivalent data protection standards.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="10. Data Retention">
        <p>We retain personal data only for as long as necessary for the purposes set out, considering:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Contractual obligations and the duration of the merchant relationship.</li>
          <li>Legal, tax and accounting retention requirements (receipt and transaction records may be retained for statutory periods — typically up to 7 years or as required).</li>
          <li>Fraud prevention and dispute resolution needs.</li>
          <li>After account termination we will securely delete or anonymize data per our retention schedule, except where legal obligations require longer retention.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="11. Security">
        <p>We implement appropriate technical and organisational measures, including:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Encryption in transit (TLS) and at rest where appropriate;</li>
          <li>Access controls and role-based permissions;</li>
          <li>Secure key management;</li>
          <li>Regular security testing and vulnerability management;</li>
          <li>Logging, monitoring and incident response procedures;</li>
          <li>Employee training and confidentiality obligations.</li>
        </ul>
        <p>
          No system is perfectly secure; however we maintain commercially reasonable measures to protect
          personal data.
        </p>
      </LegalSection>

      <LegalSection heading="12. Data Breach Notification">
        <p>In the event of a personal data breach, we will:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Promptly assess the incident and take remedial action;</li>
          <li>Notify the Data Protection Commissioner and other authorities as required by the DPA &quot;as soon as practicable&quot; where notification obligations arise; and</li>
          <li>Notify affected data subjects when the breach is likely to result in a high risk to their rights and freedoms, providing information about mitigation and available support.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="13. Data Subject Rights (Kenya)">
        <p>Subject to legal limitations and verification, data subjects may exercise the following rights:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Access:</strong> obtain confirmation of processing and a copy of personal data.</li>
          <li><strong>Rectification:</strong> correct inaccurate or incomplete data.</li>
          <li><strong>Erasure:</strong> request deletion where lawful (right to be forgotten), subject to retention obligations.</li>
          <li><strong>Restriction:</strong> request restriction of processing in specific circumstances.</li>
          <li><strong>Objection:</strong> object to processing based on legitimate interests or direct marketing.</li>
          <li><strong>Portability:</strong> receive personal data in a machine-readable format (where technically feasible).</li>
          <li><strong>Withdraw consent:</strong> withdraw consent to processing where consent is the legal basis.</li>
        </ul>
        <p>
          To exercise any right, contact admin@vektaedge.tech. We will verify identity and respond within
          the timeframes required by law.
        </p>
      </LegalSection>

      <LegalSection heading="14. Marketing Communications and Opt-Out">
        <p>We will only send marketing communications where you have given consent (or where lawful). You can opt out at any time via:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Unsubscribe links in messages; or</li>
          <li>Updating preferences in your account; or</li>
          <li>Contacting admin@vektaedge.tech.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="15. Automated Decision-Making and Profiling">
        <p>
          We may use automated processing for analytics, fraud detection and personalization. Decisions
          that have legal or similarly significant effects on individuals will not be based solely on
          automated processing unless necessary and with appropriate safeguards; affected users will be
          informed and permitted to request human review where required by law.
        </p>
      </LegalSection>

      <LegalSection heading="16. Children's Data">
        <p>
          Our Platform is not directed to children under 18 (the age of majority in Kenya). We do not
          knowingly collect personal data of children under 18. If we become aware we have collected such
          data without appropriate consent, we will delete it as required.
        </p>
      </LegalSection>

      <LegalSection heading="17. Merchant Obligations and Controller Responsibilities">
        <p>Merchants are responsible for:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Complying with applicable data protection laws as Controllers (obtaining consents, providing privacy notices, responding to data subject requests relating to their customers).</li>
          <li>Providing lawful instructions to VEKTAEDGE TECHNOLOGIES for processing.</li>
          <li>Ensuring they have rights to share customer data with us.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="18. Complaints and Supervisory Authority">
        <p>
          If you are dissatisfied with our handling of your personal data, contact us at
          admin@vektaedge.tech. You may also lodge a complaint with the Office of the Data Protection
          Commissioner — Kenya.
        </p>
      </LegalSection>

      <LegalSection heading="19. Transfers in Event of Sale or Reorganisation">
        <p>
          If the Company is involved in a merger, acquisition or sale of assets, personal data may be
          transferred to prospective purchasers and successor entities. We will notify users and provide
          choices where required.
        </p>
      </LegalSection>

      <LegalSection heading="20. Links to Third-Party Sites">
        <p>
          Our Platform may link to third-party websites or services. We are not responsible for their
          privacy practices. Review their privacy policies before sharing personal data.
        </p>
      </LegalSection>

      <LegalSection heading="21. Changes to this Policy">
        <p>
          We may update this Privacy Policy to reflect changes in law, practice or Platform functionality.
          Material changes will be communicated by posting the updated policy and, where required,
          notifying users. Continued use after notification constitutes acceptance of the updated Policy.
        </p>
      </LegalSection>

      <LegalSection heading="22. Effective Date">
        <p>This Policy is effective as of the &quot;Last Updated&quot; date above.</p>
      </LegalSection>
    </LegalPage>
  );
}
