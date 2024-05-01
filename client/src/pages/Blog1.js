import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Blog1() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-didot text-center mb-4 max-w-4xl text-gray-900">
        Mental wellbeing: An important boardroom discussion amongst corporate
        India
      </h1>
      <img
        src="/images/blogpic1.jpg"
        alt="Descriptive Alt Text"
        className="max-w-xl rounded-lg shadow-lg mb-4 mt-4"
      />

      <div className="max-w-2xl text-sm text-gray-600 mt-8">
        <p className="mb-2 text-lg">
          The mental and emotional health of employees has become an
          increasingly crucial topic of discussion in the corporate world. In
          India, the World Health Organization (WHO) estimates that 15% of
          working-age adults experience a mental disorder. Furthermore, stress
          related to the workplace has been identified as the most significant
          factor affecting employees mental health, with a recent Deloitte
          survey revealing that 47% of professionals have experienced
          workplace-related stress. These statistics highlight the urgent need
          for companies to prioritize mental wellbeing and create a supportive
          environment for their employees.
        </p>
        <p className="mb-2 text-2xl text-gray-900">
          Considering mental health holistically
        </p>
        <p className="mb-2 text-lg">
          Addressing mental health in the workplace should not be viewed in
          isolation but rather as an integral part of broader corporate agendas
          such as diversity and inclusion, performance and growth, and
          employer-employee relationships. In the aftermath of the COVID-19
          pandemic, the environment has been marked by uncertainty, leaving
          employees anxious and emotionally drained due to economic, personal,
          and professional uncertainties. Companies must recognize these
          challenges and take proactive steps to support their workforce.
        </p>
        <p className="mb-2 text-2xl text-gray-900">
          Identifying problem areas and solutions
        </p>
        <p className="mb-2 text-lg">
          To promote mental wellbeing, companies can implement various changes.
          For instance, creating an empathetic culture is essential, where
          employees feel supported and understood. Flexible policies that allow
          for a better work-life balance can significantly reduce stress levels.
          Realignment of work goals, ensuring they are achievable and
          meaningful, can help employees find purpose in their tasks.
          Prioritizing employee health through wellness programs, fitness
          initiatives, and access to mental health resources can make a
          significant difference.
        </p>
        <p className="mb-2 text-2xl text-gray-900">
          Collaboration with health experts
        </p>
        <p className="mb-2 text-lg">
          Employers can collaborate with mental health professionals to ensure
          the wellbeing of their employees. Regular counseling sessions covering
          a range of topics, including career discussions and stress management
          techniques, can be offered. Providing a safe space for employees to
          express their concerns and seek guidance is crucial. Additionally,
          incorporating preventive and curative interventions within the
          workplace, such as workshops on mindfulness and resilience, can
          empower employees to take charge of their mental health.
        </p>
        <p className="mb-2 text-2xl text-gray-900">
          Leveraging Technology for Mental Wellbeing
        </p>
        <p className="mb-2 text-lg">
          Technology has become a valuable tool in supporting corporate efforts
          to enhance employee mental wellbeing. Telemedicine, for instance, has
          gained significant traction during the pandemic. It allows employees
          to access healthcare professionals remotely, offering convenience and
          reducing barriers to seeking help. The telemedicine market in India is
          expected to reach $5.5 billion by 2025, indicating sustained demand
          for digital health platforms.
        </p>
        <p className="mb-2 text-lg">
          Online consultations have also witnessed remarkable growth. The
          lockdowns imposed during the pandemic prompted a surge in
          teleconsultations, with the market reaching $163 million in March
          2021. This trend is projected to continue, with the online doctor
          consultation market expected to exceed $800 million by FY2024, growing
          at a 72% CAGR.
        </p>
        <p className="mb-2 text-lg">
          Furthermore, e-pharmacies have seen an increase in customer traffic.
          Fueled by rising internet adoption and digital awareness, these
          platforms are projected to cater to 70 million households in India by
          FY2025, according to industry body FICCI. Embracing these
          technological advancements not only provides employees with convenient
          access to healthcare services but also showcases a commitment by
          employers to prioritize mental wellbeing.
        </p>
        <p className="mb-2 text-2xl text-gray-900">Wrapping up</p>
        <p className="mb-2 text-lg">
          Mental wellbeing is no longer an issue that can be overlooked in the
          boardrooms of corporate India. The statistics on workplace-related
          stress and mental health disorders among employees highlight the
          urgency to address these challenges.
        </p>
        <p className="mb-2 text-lg">
          By creating an empathetic culture, implementing flexible policies,
          realigning work goals, prioritizing health, and fostering open
          communication, companies can make a positive impact on the mental
          wellbeing of their workforce. Collaboration with health experts and
          leveraging technology further strengthens these efforts, ensuring that
          employees receive the support they need to thrive both personally and
          professionally. As corporate India moves forward, it is imperative
          that mental wellbeing remains at the forefront of boardroom
          discussions, ultimately creating healthier and more productive
          workplaces.
        </p>
        <p className="mb-2 text-lg">
          Dont worry about sounding professional. Sound like you. There are over
          1.5 billion websites out there, but your story is whats going to
          separate this one from the rest. If you read the words back and don’t
          hear your own voice in your head, thats a good sign you still have
          more work to do.
        </p>
        <p className="mb-2 text-lg">
          Be clear, be confident and don’t overthink it. The beauty of your
          story is that it’s going to continue to evolve and your site can
          evolve with it. Your goal should be to make it feel right for right
          now. Later will take care of itself. It always does.
        </p>
      </div>

      <div className="self-end w-full text-right mt-8 pr-8">
        <Link
          to="/blog/blog2"
          className="text-4xl font-didot text-gray-900 hover:underline"
        >
          Mental Health At Work →
        </Link>
      </div>
    </div>
  );
}
