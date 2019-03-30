// React
import React from 'react';

// UI
import { Question as Q, Answer, Text, Link, Section } from '../../components'

const Question = ({ children }) => (
  <div className="col-12 col-lg-8 mx-auto">
    <Q>{children}</Q>
  </div>
)

const Content = ({ name, type, ig, children }) => (
  <Section>
    <div className="mt-4 mb-5">
      <Text variant="h6" align="center">{name}{type && `   //   ${type}`}</Text>
      <div className="mb-4">
        {typeof(ig) === 'object' && ig.map((acct, i) => (
          <Text align="center" key={i}><Link href={`https://instagram.com/${acct}`}>@{acct}</Link></Text>
        ))}
        {typeof(ig) === 'string' &&
          <Text align="center"><Link href={`https://instagram.com/${ig}`}>@{ig}</Link></Text>
        }
      </div>
    </div>
    {children}
  </Section>
)

const ADRIAN = {
  name: 'Adrian',
  ig: 'hndicapshoota',
  id: 'Adrian',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>What makes you unique?</Question>
        <Answer>Creating a balance between reality and imagination to create something most people wouldn't see unless it was through my eyes.</Answer>

        <Question>Who’s your biggest creative inspiration and why?</Question>
        <Answer>My moms. She's always been there from the start and she's sacrificed a lot to put me in the position I'm in today. She's always made it a point to encourage me to just be me and create and to never follow in anybody's footsteps.</Answer>

        <Question>What’s something you would do or create if you had all the resources in the world?</Question>
        <Answer>Give back to the youth somehow and give them an outlet to create in an environment that allows them to be themselves and expressive through art and learn from other creatives in the area. The possibilities are endless when you get the youth involved.</Answer>

        <Question>Words to live by?</Question>
        <Answer>That it doesn't matter what anybody thinks about what you make and that you shouldn't let it affect the way you create. Enjoy what you do.</Answer>
      </Content>
    );
  }
};
const AIYANA = {
  name: 'Aiyana',
  ig: 'aiyanayuki',
  id: 'Aiyana',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>What makes you unique?</Question>
        <Answer>My massive dimples. Apparently they’re a deformity.</Answer>

        <Question>What’s something that you think would add to elevate Seattle's creative community?</Question>
        <Answer>Taking money from the tech fuckbois, and using gentrification to our advantage. We already have the talent, Seattle just lacks funding and representation.</Answer>

        <Question>What do you wish you knew when you began on your path in the arts?</Question>
        <Answer>That I become a psycho that can’t distinguish work from personal life and that I’d fall asleep with my sketch pad and laptop next to me and not talk to a human (just my pets) for hours on end and need a buffering period when I come into contact with another human again because I somehow lose the ability to interact normally. It wouldn’t have changed anything but it’s funny to know now.</Answer>

        <Question>What’s your greatest accomplishment?</Question>
        <Answer>I once ate two boxes of Krispy Kreme donuts in one sitting. I didn’t even throw up after from all the sugar.</Answer>
      </Content>
    );
  }
};
const ALAN = {
  name: 'Alan',
  ig: ['yungdanilo', 'peoplewhoaskforcigarettes'],
  id: 'Alan',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>What makes you unique?</Question>
        <Answer>ACTUALLY BEING BORN AND RAISED IN SEATTLE.</Answer>

        <Question>What's your favorite part about what you do?</Question>
        <Answer>TAKING ON NEW CREATIVE ENDEAVORS. It took a long time, hard work, and dedication to get to the point where I am currently at. I realized early on that building a portfolio was very important. I believe that developing a unique and recognizable aesthetic that is applicable to everything involved in being a creative and working on specific projects.  Whether it is my photography or styling, I want people to acknowledge right off the bat, that I was involved in that particular creative process.  At this point, I enjoy taking on projects where I know I am going to be surrounded by individuals that I can learn from, be influenced by, give/take criticism; all things that will lead to me progressing as much as possible. It's also really cool when people say they are influenced by my photos or my style. As long as I am creating, and people are taking influence in these things, then all is good for me.</Answer>

        <Question>Who's your biggest creative inspiration and why?</Question>
        <Answer>MY FRIENDS AND FRANK OCEAN, BECAUSE THEY ARE BOTH THE SHIT. DEV HYNES, DAVID LYNCH, WILLIAM S. BURROUGHS. THEY ARE ALL THE SHIT! SHOUT OUT TELE AND U 2 NICE.</Answer>

        <Question>Words to live by?</Question>
        <Answer>BE HUMBLE, BE CONFIDENT, BE NICE, WEAR WHATEVER THE FUCK YOU WANT. </Answer>
      </Content>
    );
  }
};
const ARAMIS = {
  name: 'Aramis',
  ig: 'aramisischoice',
  id: 'Aramis',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>What do you wish you knew when you began on your path in the arts?</Question>
        <Answer>Patience; it’s something I still struggle with.</Answer>

        <Question>What’s something you would do or create if you had all the resources in the world?</Question>
        <Answer>I really want to build a creative hub, a place you could really let your creative run wild but also feel at home. It would have to feel more like a house than a work space - that’s super important to me.</Answer>

        <Question>What’s something that you think would add to elevate Seattle's creative community? </Question>
        <Answer>More arts programs in public schools.</Answer>

        <Question>Who’s your biggest creative inspiration and why?</Question>
        <Answer>This is a very hard question to answer but I don’t think it’s a person, it’s my life and my experiences. That’s what drives me, I want more for myself and the people around me, and that inspires me.</Answer>
      </Content>
    );
  }
};
const CHRIS = {
  name: 'Chris',
  ig: ['comecorrectmedia', 'typedchris'],
  type: 'Come Correct Media',
  id: 'Chris',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
        type={this.type}
      >
        <Question>What’s your favorite part about what you do?</Question>
        <Answer>Capturing moments for people and ourselves to look back on. We all do so much shit sometimes and tend to forget what we even did. Being able to have a glimpse of what happened when it did makes me appreciate what we've been able to do and see. Also, being able to meet other insanely talented artists!</Answer>

        <Question>What do you wish you knew when you began on your path in the arts?</Question>
        <Answer>To surround myself with other artists. For the first few years, I didn't really surround myself with any artists. I've become so inspired by other artists that aren't doing what we do. </Answer>

        <Question>What’s something you would do or create if you had all the resources in the world?</Question>
        <Answer>If I had all the resources, I would want to better prepare young people for the real world/education without making them pay for it. I think it's important that all people should learn more life skills from elementary school all through high school. Some of those life skills would include communicating with people in a professional manner or respect, how to manage money, getting a credit card/house/car. Even so much as filling out a job application and doing a job interview. I think some of the stuff like that can create more opportunities for young people to do better. </Answer>
      </Content>
    );
  }
};
const JESS = {
  name: 'Jessica',
  ig: 'jess2sick',
  id: 'Jess',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>Who’s your biggest creative inspiration and why?</Question>
        <Answer>The youth, female entrepreneurs, and my future self.</Answer>
        <Answer>The Youth: It’s so amazing to see young creatives coming into the scene un-phased, un-tainted, wide-eyed and open. You can really feel their genuine energy. It’s so pure. It’s so captivating. The youth inspires me to approach art with an open mind. Unafraid. Seriously, kids are savages. They say what they want and do things with no filter. I want to be young forever. Look up <Link href="https://www.instagram.com/babylucyforeal">babylucyforeal</Link> and you’ll know what I mean. She’s a prime example of being in tune with embracing your true self and exploring your talents to the fullest!</Answer>
        <Answer>Female Entrepreneurs: If you’re running your own business, carving out a new path, or straight repping your true unapologetic self, you inspire me. You inspire me to continue my path as a female Chinese creative and to continue to push forward in my journey embracing all of my talents and my purpose.</Answer>
        <Answer>Future self: I’ve had several mentors in my creative career, but as I meet my “idols” or people that I’ve placed on a pedestal as better than me, I’ve realized that I’m suppressing the idea of being able to go beyond/live out what they have already established. I’m thrilled knowing each day I’m getting closer to Future Jess.</Answer>

        <Question>What’s something you would do or create if you had all the resources in the world?</Question>
        <Answer>
          <ul>
            <li>Carving a new avenue for dancers and creatives.</li>
            <li>Providing more opportunities for people to do what they love and actually make sustainable income and not have to hold a part-time job to keep afloat. </li>
            <li>Providing a space or a business that will continuously elevate people’s unique talents on this earth. </li>
            <li>Run a scholarship program for dancers to help them travel and see the world/compete, and leverage new opportunities to feature them on more elevated platforms. </li>
            <li>Run a nonprofit that supports youth going through depression and anxiety and to have a safe space for them to speak about issues to resolve them. </li>
            <li>It’s endless!</li>
          </ul>
        </Answer>

        <Question>Words to live by?</Question>
        <Answer>
          <ul>
            <li>If your dreams don’t scare you, they’re not big enough.</li>
            <li>Aim high, never settle for less and have confidence in yourself. </li>
            <li>A great artist touches on the past, represents the presents, and prophesizes the future. Don’t be afraid to take risks. - Jada Pinkett Smith</li>
            <li>Believe in yourself! </li>
          </ul>
        </Answer>
      </Content>
    );
  }
};
const JORDAN = {
  name: 'Jordan',
  ig: 'jofaaar',
  id: 'Jordan',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>Who’s your biggest creative inspiration and why?</Question>
        <Answer>I really can’t name one. My creative inspiration spans so many genres, from Filipino martial arts to Black Star + The Roots to QTPOC playwrights to tattoo ceremonies to Solange’s art direction to food to kultural work ... I ADMIRE IT ALL.</Answer>

        <Question>Words to live by?</Question>
        <Answer>The people united will never be defeated. </Answer>

        <Question>What’s your favorite part about what you do?</Question>
        <Answer>One of the reasons I love creating art and curating events is because they can be form of healing. For me, they are tools to uncover trauma in a creative, accessible way + on my own terms. With creating a physical piece of art or a physical space / atmosphere, I try to be as intentional as I can with why I want to create it. Then, I get to meet that piece of myself face to face and shake hands. I can interview my relationship as a queer woman of color to intimacy, to imperialism, to class, to gender presentation. It can be scary + vulnerable but so rewarding!!</Answer>

        <Question>What do you wish you knew when you began on your path in the arts?</Question>
        <Answer>That my productivity is not my worth. That my craft can shape shift and still be valued. That it can have different audiences and still be valid. </Answer>
      </Content>
    );
  }
};
const MISTADC = {
  name: 'MistaDC',
  ig: 'mistadc',
  id: 'MistaDC',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>What’s your favorite part about what you do?</Question>
        <Answer>Being able to outdo myself every time, by creating an art piece with my voice that once was a voice memo in my phone. </Answer>

        <Question>What do you wish you knew when you began on your path in the arts?</Question>
        <Answer>How important it is to have a strong team that all believes in each other, that nothing is truly done by yourself. Every “L” that I took or will take is not going to shape my tomorrow. My path is greater than my past failures.</Answer>

        <Question>What’s your greatest accomplishment?</Question>
        <Answer>Creating and releasing beautiful music and having people acknowledge that; not only from Washington, but from other states too. Also being heard and having my voice mean something to people. </Answer>

        <Question>Who’s your biggest creative inspiration and why?</Question>
        <Answer>I have a couple, but my true inspiration really has to be Donald Glover (Childish Gambino).  He’s one of those artist / creatives that I just understood early. I felt like I knew what his ultimate goal was being a man of many talents. Not only is he just interesting; a lot of everything he does has a hidden meaning behind it and it’s something that I really appreciate in his art form. From his TV shows and to his music, he keeps my creative heart inspired. I need to meet this guy in the future. Plus we both have the same birthday. (I’ll always tell people that) </Answer>
      </Content>
    );
  }
};
const NEB = {
  name: 'Neb',
  ig: ['comecorrectmedia', '_benbackwards'],
  type: 'Come Correct Media',
  id: 'Neb',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
        type={this.type}
      >
        <Question>What’s your favorite part about what you do?</Question>
        <Answer>Being able to see something in our heads, and then make it happen. We just finished our first ‘short film’, and it’s crazy to go through the entire process. We came up with the concept, and I went home and drew out the most terrible (but in depth) sketches that you’ve ever seen. A couple of months later, we’re looking at these terrible drawings - and the craziest thing is how close they are to the actual shots. Seeing that definitely opened up our eyes, and showed us how malleable reality really is. </Answer>

        <Question>What do you wish you knew when you began on your path in the arts?</Question>
        <Answer>I just wish I would’ve worked way fucking harder. People are fucking lazy. I was fucking lazy. And I’m so hard on myself because if I was on the shit that I’m on NOW back then, I’d be so much further. Also - just learning not to quit. That’s early, early, early in life. I should’ve never quit a lot of shit, because if I would’ve pressed through, who knows where I would be. Then again - I’m 23, so who knows what those negatives about my limited past have instilled in me to positivity spin my future. That’s two things I’m huge on now though: Working hard as shit. And not quitting.</Answer>

        <Question>What’s something that you think would add or elevate Seattle's creative community?</Question>
        <Answer>Sheesh man. Being selective with who you support, and not being afraid to give constructive criticism. We need to understand that when we co-sign something, we’re putting them on a pedestal, contending with literally the best in whatever arena they’re operating in. If you’re gassing someone because they’re your friend, but their art just ISN'T THERE YET, you’re not doing them a favor. They’re up against the best in the game, help them be better. </Answer>
      </Content>
    );
  }
};
const ROCKSTEADY = {
  name: 'Rocksteady',
  ig: 'rockssteady',
  id: 'Rocksteady',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>What’s your favorite part about what you do?</Question>
        <Answer>The accountability. Knowing that you are responsible for creating events and curating vibes is an awesome challenge. It makes taking the credit for your accomplishments that much better because there was diligent work put behind it. Even when things aren’t going to plan, it’s a great feeling to know that you pushed through L’s and roadblocks to reach new heights. </Answer>

        <Question>Who’s your biggest creative inspiration and why? </Question>
        <Answer>Tupac. His life story and music career respectively identify how far a creative outlet can push a person's life. Rap music for Tupac was a means to communicate his message and he worked tenaciously through his music to make sure his voice and stories were felt. We all know how Tupac’s life ended on a tragic note, however, his legacy goes to show that when an individual is given the right opportunities to pursue and build their talents, the opportunities are endless.</Answer>

        <Question>What do you wish you knew when you began on your path in the arts?</Question>
        <Answer>I wish I was made aware of the fact that everyone has their own time to peak or escalate in their careers. Social media and the internet can make you feel inadequate but I’ve come to learn that comparing yourself to others success takes your eyes off of your own lane. Plus, the internet is mainly used to document our highlights and blessings, the context behind how people got to these positions is thrown out the window.</Answer>
      </Content>
    );
  }
};
const SIMON = {
  name: 'Simon',
  ig: 'le.gatsby',
  id: 'Simon',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>What makes you unique?</Question>
        <Answer>I think what makes me unique is that I want to be 100% me with what I do and what I create in the world. I want to fully express my ideas in what I am influenced + inspired by at the moment. Whether it be from a movie I just watched or music I currently like, I just want to express those things in my art or style. It all comes from my experience and my perspective.</Answer>

        <Question>What do you wish you knew when you began on your path in the arts?</Question>
        <Answer>I wish I knew a lot more about the business side of things and what I needed to prepare for that. Having to deal with the back end work outside of being creative, like taxes and paperwork etc. You really need to make sure everything is organized on the business end and not neglect those things. Really save some money before jumping into your passion because struggling as an artist is inevitable and you want to relieve as much stress as possible.  </Answer>

        <Question>What’s your greatest accomplishment?</Question>
        <Answer>I never really felt that I have accomplished something truly great honestly. I have such high goals and I'm not sure I've reached it yet. I guess if I have to choose, I'd say making the move to do what I'm passionate about and not being afraid to do so.</Answer>

        <Question>What’s something you would do or create if you had all the resources in the world?</Question>
        <Answer>I would create a program for the youth who are inspired to do something in the creative field. I want to help them have resources from real professionals that can continue to motivate them to follow what they're passionate about. They create the future, and the youth often gets discouraged because society doesn't allow them to see past the normal 9-5 jobs.</Answer>
      </Content>
    );
  }
};
const STEPHANIE = {
  name: 'Stephanie',
  ig: 'ohsostephanie',
  id: 'Stephanie',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>What makes you unique?</Question>
        <Answer>I help patients at Harborview Medical Center by day and I am a dancer by night. I never would have imagined that I would be in the position I am today. I get to relieve the stress of patient’s by helping them get health insurance AND I also get to entertain people when I dance on stage.</Answer>

        <Question>What do you wish you knew when you began on your path in the arts?</Question>
        <Answer>I wish I knew about how important it was to keep up with physical fitness. I started my path in the arts when I started high school. I wish I took that part more seriously because it may be the only thing that is holding me back. But, it’s not too late so i’m working on it now! </Answer>

        <Question>Who’s your biggest creative inspiration and why?</Question>
        <Answer>My biggest creative inspiration are ALL the women who are doing amazing things locally in their own communities. In this social media driven world that we live in, I see many inspiring creatives in different cities and seeing what they do makes me want to do better and step my game up!</Answer>

        <Question>What’s something that you think would add or elevate Seattle's creative community?</Question>
        <Answer>I think if all the dope ass creatives in Seattle came together to put together a huge creative event where we can celebrate everyone’s dopeness/open everyone’s eyes to how much damn talent there REALLY is, it would elevate the community. There are MANY different little groups of creatives putting events together but it would be dope if everyone came together and put their head together to create something bigger. </Answer>
      </Content>
    );
  }
};
const TEENA = {
  name: 'Teena',
  ig: 'teena_thach',
  id: 'Teena',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>What’s your favorite part about what you do?</Question>
        <Answer>My favorite part about the work I do is definitely having a vision in my head become something in real life. Using the power of social media to connect with people all over the world and make their day, just by one simple interaction. </Answer>

        <Question>What do you wish you knew when you began on your path in the arts?</Question>
        <Answer>I wish I knew how important it was to have a little savings before putting almost all your money into your art + work. Money comes and goes, but being broke and struggling sucks. It's smart to have a little something to work with, especially when you're also trying to live on your own. </Answer>

        <Question>Who’s your biggest creative inspiration and why?</Question>
        <Answer>Simon is my biggest creative inspiration. He sees me at my lowest and motivates me to be the best me I can be. He doesn't complete me, but is a part of my whole. His vision and experience in art has pushed me to see things I've never seen before. We always teach each other something new. He's special. </Answer>

        <Question>What’s something that you think would add to elevate Seattle's creative community?</Question>
        <Answer>Have more available spaces and resources to network, create events and build off each other. We need to work together and not against each other. </Answer>
      </Content>
    );
  }
};
const TORI = {
  name: 'Tori',
  ig: 't0ribabyy',
  id: 'Tori',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>What’s your favorite part about what you do?</Question>
        <Answer>I love bringing people together who are all creatives, but in different lights. When putting together events, I try to incorporate different elements of art that everyone appreciates and can relate to. Seeing the community come together is a beautiful thing to experience and be apart of. </Answer>

        <Question>What’s something you would do or create if you had all the resources in the world?</Question>
        <Answer>I want to open up a huge art gallery that doesn’t only display work, but is a work space for different creatives to come work. Host art shows, workshops on how to utilize resources in your community,  have amazing guest speakers come to spit some game, and just create. </Answer>

        <Question>What’s your greatest accomplishment?</Question>
        <Answer>My greatest accomplishment so far has been The Feels. That’s my baby. It was my first art show ever displaying my own work and the first event I ever produced. I have met so many dope people in the last two years because of it, and have been able to create a cool little event that people in Seattle can appreciate. </Answer>

        <Question>Who’s your biggest creative inspiration and why?</Question>
        <Answer>My family and friends. I am one of a few creatives in both groups, but they are so supportive of everything that I do. I do it and continue to push myself creatively to make them all proud.</Answer>
      </Content>
    );
  }
};
const TROY = {
  name: 'Troy',
  ig: 'troyosaki',
  id: 'Troy',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>What’s your favorite part about what you do?</Question>
        <Answer>I really enjoy building relationships with people through art/writing.  Being able to create something that reminds someone of their grandfather’s favorite windbreaker or makes someone miss their 9th grade summer is really special.  I appreciate how art exposes emotional truth and isn’t grounded in facts or evidence but instead imagination.  Being able to relate to people through feelings is hella powerful and exciting.</Answer>

        <Question>Who’s your biggest creative inspiration and why?</Question>
        <Answer>I’m really inspired by poets and poems that invent new colors, find beauty in the most unremarkable moments like while spreading almond butter on whole wheat toast, and make me fall in love with words over and over again.  A few poets I’ve been reading and listening to a lot recently that I think do this hella well are <Link href="https://youtu.be/tlcTGDRX450">Sarah Kay</Link>, <Link href="https://www.poets.org/poetsorg/poem/i-invite-my-parents-dinner-party">Chen Chen</Link>, and <Link href="https://youtu.be/FjsZKV0b4m8">Melissa Lozada-Oliva</Link>.</Answer>
        <Answer>I’m also really inspired by movements for social change that are happening here in Seattle and across the world.  Grassroot organizers and community organizations fighting for new worlds move me to create art as a way to participate in the liberation of all people.  My goal is to create work that shifts culture and changes people's hearts and minds.</Answer>

        <Question>What do you wish you knew when you began on your path in the arts?</Question>
        <Answer>When I first started writing I tried to mimic people I looked up to and thought were dope.  I’d use similar imagery, perform in similar cadences, and write about topics I thought they’d write about too.  I wish I learned earlier how to be comfortable and excited about sharing my own stories and using language and images that were particular to my life.  If I could travel in time, I’d visit my younger self and try to convince him that whether he wrote about singing “You’re So Last Summer” by Taking Back Sunday in his room alone or driving along Lake Washington Boulevard at 2 a.m. while talking to the moon what he had to say had value and was important to write about.</Answer>

        <Question>Words to live by?</Question>
        <Answer>“There’s nothing new under the sun, but there are new suns.” - Octavia E. Butler</Answer>
      </Content>
    );
  }
};
const VICTORIA = {
  name: 'Victoria',
  ig: 'visionbykovios',
  id: 'Victoria',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>What makes you unique?</Question>
        <Answer>I’m devoted to development in all aspects - creatively, mentally, professionally, spiritually, physically. There is a high level of honesty required for devotion. I appreciate being honest with myself even though it can be challenging. </Answer>

        <Question>What’s your greatest accomplishment?</Question>
        <Answer>My greatest accomplishment... this may sound corny but it’s real. The times I have had an emotional effect on people through imagery. I’ve had people celebrating the culmination of someone’s life and using the images that I took as the photo for the service, and invite me to photograph the service. I’ve had people cry during a shoot while looking at the photos because they were amazed by the way they looked. Reconnected with their beauty. Someone once invited me to photograph their aunt who was diagnosed with cancer. I was invited to photograph a Black Panther Party meeting. These sacred intimate moments. Emotional depth, I live for it. I’m an intimacy junkie. </Answer>

        <Question>Words to live by?</Question>
        <Answer>There’s no rush, everything in time.</Answer>

        <Question>What’s something that you think would add or elevate Seattle's creative community?</Question>
        <Answer>I recently spoke on a panel at the NW Film Forum lead by Eula of Hella Black Hella Seattle, my first time speaking on a panel and it was enriching. Learning about other local creatives views and sharing our experiences with each other was dope. I think more events with panels would be great.</Answer>
      </Content>
    );
  }
};

export default [
  ADRIAN,
  AIYANA,
  ALAN,
  ARAMIS,
  NEB,
  CHRIS,
  JESS,
  MISTADC,
  ROCKSTEADY,
  TROY,
  JORDAN,
  STEPHANIE,
  SIMON,
  TEENA,
  TORI,
  VICTORIA
];
