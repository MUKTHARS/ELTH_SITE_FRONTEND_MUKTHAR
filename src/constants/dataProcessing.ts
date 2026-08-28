export const DATA_PROCESSING_SECTIONS = [
  {
    title: 'Purpose of This Document',
    body: `This Data Processing overview describes how Monobot Agentic Automations LLP ("Elth AI") processes data on behalf of hospitals and clinics ("Tenants") using the Services, and the technical and organisational measures in place to protect that data.

It is intended for hospital administrators, compliance officers, and IT teams evaluating Elth AI, and supplements our Privacy Policy and Terms of Service.`,
  },
  {
    title: 'Controller & Processor Roles',
    body: `For patient health data, the Tenant (hospital or clinic) acts as the Data Fiduciary / Controller and determines the purpose and means of processing. Elth AI acts as the Data Processor, processing patient data solely on the Tenant's documented instructions to provide the Services.

Elth AI does not use Tenant patient data to train shared or cross-tenant AI models, and does not sell or rent patient data to any third party.`,
  },
  {
    title: 'Data Isolation Per Tenant',
    body: `Each hospital's data is logically isolated within its own tenant environment. Patient records, clinical protocols, and AI configuration for one hospital are never visible to, or used by, another hospital on the platform.

Cross-tenant queries are not possible through the standard application layer. Access to raw tenant data by Elth AI personnel is restricted, logged, and limited to what is required for support, security, or maintenance.`,
  },
  {
    title: 'Categories of Data Processed',
    body: `• Patient identity and contact information (name, phone, date of birth)
• Clinical data (symptoms, consultation notes, prescriptions, lab reports, diagnoses)
• Communication data (WhatsApp messages, appointment records)
• Tenant configuration data (AI persona, protocols, doctor rosters, branding)
• Usage and audit-log data (login events, consent events, access logs)`,
  },
  {
    title: 'Security Measures',
    body: `• Encryption in transit (TLS 1.3) and at rest (AES-256) for all patient health data
• Role-based access control, so each user role only sees data relevant to their function
• Every AI access to a patient record requires an active, logged patient consent
• Infrastructure hosted on ISO 27001 certified cloud infrastructure in India (AWS ap-south-1)
• Regular security reviews and penetration testing of production systems
• Full audit trail of consent grants, revocations, and data access events`,
  },
  {
    title: 'Data Residency',
    body: `Patient data is stored and processed within India by default, in line with data localisation expectations under the Digital Personal Data Protection Act, 2023. Enterprise Tenants may request dedicated regional or on-premise deployment options as part of a custom agreement.`,
  },
  {
    title: 'Sub-Processors',
    body: `Elth AI uses a limited number of vetted sub-processors for infrastructure, messaging, and AI inference — including cloud hosting, WhatsApp Business API delivery, and large language model providers used to power clinical AI features. All sub-processors are bound by confidentiality and data-protection obligations no weaker than those in this document. A current sub-processor list is available on request.`,
  },
  {
    title: 'Data Retention & Deletion',
    body: `Tenant data is retained for as long as the Tenant's subscription is active, or as required by applicable healthcare record-retention law, whichever is longer. Upon termination of a Tenant's subscription, data is available for export for a reasonable transition period, after which it is securely deleted in accordance with Our retention schedule, unless a longer retention period is required by law.

Patients may request erasure of their personal data at any time, subject to legal retention obligations that apply to clinical records.`,
  },
  {
    title: 'International Transfers',
    body: `Where any limited data must be transferred outside India (for example, to a sub-processor providing AI inference services), such transfers are made under contractual safeguards consistent with the Digital Personal Data Protection Act, 2023 and, where applicable, other relevant data-protection frameworks.`,
  },
  {
    title: 'Breach Notification',
    body: `In the event of a data breach affecting Tenant or patient data, Elth AI will notify the affected Tenant without undue delay, and will support the Tenant in meeting its own regulatory notification obligations.`,
  },
  {
    title: 'Contact',
    body: `For data processing agreements, sub-processor lists, or security documentation, please contact us at privacy@saple.ai.`,
  },
]
