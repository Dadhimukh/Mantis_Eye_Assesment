const orgData = [
  {
    id: 1,
    fullName: "Alice Anderson",
    designation: "Founder",
    email: "alice.anderson@example.com",
    manager: "-", // Founder has no manager
  },
  {
    id: 2,
    fullName: "Bob Barker",
    designation: "Founder",
    email: "bob.barker@example.com",
    manager: "-", // Founder has no manager
  },
  {
    id: 3,
    fullName: "Carol CEO",
    designation: "CEO",
    email: "carol.ceo@example.com",
    manager: 1, // Carol CEO reports to Founder (id: 1)
  },
  {
    id: 4,
    fullName: "David HR",
    designation: "CHRO",
    email: "david.hr@example.com",
    manager: 1,
  },
  {
    id: 5,
    fullName: "Eric CFO",
    designation: "CFO",
    email: "eric.cfo@example.com",
    manager: 1,
  },
  {
    id: 6,
    fullName: "Frank Sales Mgr",
    designation: "Sales Manager",
    email: "frank.sales@example.com",
    manager: 3,
  },
  {
    id: 7,
    fullName: "Grace Marketing Mgr",
    designation: "Marketing Manager",
    email: "grace.marketing@example.com",
    manager: 3,
  },
  {
    id: 8,
    fullName: "Henry Ops Mgr",
    designation: "Operations Manager",
    email: "henry.ops@example.com",
    manager: 3,
  },
  {
    id: 9,
    fullName: "Irene Tech Mgr",
    designation: "Technology Manager",
    email: "irene.tech@example.com",
    manager: 3,
  },
  {
    id: 10,
    fullName: "Jack Sales TL",
    designation: "Sales Team Leader",
    email: "jack.sales@example.com",
    manager: 6,
  },

  // Add more data for other employees...
];

export default orgData;
