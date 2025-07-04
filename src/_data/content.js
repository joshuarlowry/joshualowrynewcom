module.exports = {
  about: {
    heading: "About",
    showHeading: false, // Hidden heading for screen readers
    content: [
      "I am a nimble design leader comfortable with uncharted territory and collaborating with cross-discipline teams.",
      "Together, we will determine the appropriate practices. Our approach will be different based on your experience and needs. What challenges are you having?"
    ]
  },
  
  leadership: {
    heading: "Leadership",
    showHeading: true,
    content: [
      "As a design leader, I am always curious and learning. How are people organizing around problems? How are teams articulating their research and design needs? Are there new standards that might influence our designs? What does it mean to process seismic data?"
    ]
  },
  
  design: {
    heading: "Design",
    showHeading: true,
    content: [
      "My design methodology is commingled with research. I keep the flow of work moving with tactical research including short generative activities and evaluative techniques. I have usability tested paper prototypes through production systems.",
      "As I understand the broader challenges of a product/group/organization, I author research proposals for review. The most interesting research proposal that I authored sent one of our user researchers to Angola. The coldest place I've been for research is Cold Lake, Canada where it was -50F."
    ]
  },
  
  contact: {
    heading: "Contact",
    showHeading: true,
    content: [
      "Want to work together? Contact me on [LinkedIn]({{ site.linkedin }})."
    ],
    cta: {
      text: "LinkedIn",
      url: "{{ site.linkedin }}",
      ariaLabel: "Connect with {{ site.author }} on LinkedIn"
    }
  }
};