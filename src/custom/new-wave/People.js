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
    <div className="mt-4 mb-5 text-center">
      <Text variant="title" align="center">{name}{type && `   //   ${type}`}</Text>
      {typeof(ig) === 'string' && <Link href={`https://instagram.com/${ig}`}>@{ig}</Link>}
      {typeof(ig) === 'object' && ig.map((acct, i) => (
        <Text paragraph key={i}><Link href={`https://instagram.com/${acct}`}>@{acct}</Link></Text>
      ))}
    </div>
    {children}
  </Section>
)

const ANTHONY = {
  name: 'Anthony',
  type: 'Laidback Allure',
  ig: 'anthonyujr',
  id: 'laidback',
  get content() {
    return (
      <Content
        name={this.name}
        type={this.type}
        ig={this.ig}
      >
        <Question>What’s the last photo on your camera roll?</Question>
        <Answer>An orange McLaren parked right outside of Saks Fifth Ave.</Answer>

        <Question>How do you feel social media has played into what you do and how it’s received?</Question>
        <Answer>Social media has played a huge role in my personal branding. I'm able to effectively communicate with my audience and build new relationships. Through tweets, photos, visuals and other online content, I'm able to grow a lifestyle brand that is inspired by things I surround myself with on a daily basis.</Answer>

        <Question>How do you create opportunities for yourself?</Question>
        <Answer>I'm networking all the time. I'm very active. Any chance I get to sell myself and brand, I'm taking the initiative. Those elevator pitches and drink meet ups end up turning into opportunities that I monetize from.</Answer>
      </Content>
    );
  }
};
const AVI = {
  name: 'Avi',
  type: 'Prototype Sessions',
  ig: 'aviloud',
  id: 'avi',
  get content() {
    return (
      <Content
        name={this.name}
        type={this.type}
        ig={this.ig}
      >
        <Question>How do you feel social media has played into what you do and how it’s received?</Question>
        <Answer>I have a love hate relationship with social media. I would say it has helped solidify my presence as an artist but it also is not the ideal platform for me to showcase my work. My real power is in the people I am connected with and the interactions I have in real life. Without social media all of this shit would be vastly different, can't negate its affect on the creative culture. We'll know in 10 years if this shit really helped or hindered us. I try to think about what my life would be like without social media...it would pretty much be the same without the pressures that come along with it. Because it's not the ideal platform for me, I don't share as much of my work or about myself as I should…</Answer>

        <Question>What does success look like to you?</Question>
        <Answer>Success is subjective and also can be tangible. I am successful because I am an artist making a living. I am unsuccessful because I'm not wealthy. There's a bit of success and failure every day if you're really honest with yourself. And that's not something to be ashamed of. Failure is intrinsic to success. I am successful because more times than not, if you look at one of my photos, you know I took that photo. It's not necessarily the subject matter but it's the way in which the photo is composed, lit, the subtleties that reveal themselves, the feeling that you get when you see my work that makes it mine. It takes years to develop your distinct, authentic voice and then more time to develop the skills to communicate that voice.</Answer>

        <Question>What do you want to see happen in the Seattle creative scene?</Question>
        <Answer>I want to see more merging of factions. I want to see more intersectional work. I want to see more people of color make noise and get the recognition they deserve. Seattle is a very white space, so we must remind ourselves that real progress and change comes from the margins, and we must empower folks that wouldn't have those opportunities otherwise. That's why I shoot mostly with people of color. Especially in the fashion world, which omits brown and black faces unless they're fetishized. My approach is always from a standpoint of appreciation and respect. I want to see more self-empowerment. I want to see more genuine support. Any artist that's working is doing so because of folks who broke down doors previously. I aim to be someone who opens opportunities for folks, directly and indirectly, just like my mentors did for me. I carry my mentors with me always. Sure, someone can give you a job, but the real goal is to inspire folks to create their own lanes. That's what I've done for myself and that's what I hope to see more of...people creating bodies of work, communities and experiences that are distinct and undeniable.</Answer>
      </Content>
    );
  }
};
const CLINT = {
  name: 'Clint',
  type: 'Prototype Sessions',
  ig: 'tint_hues',
  id: 'clint',
  get content() {
    return (
      <Content
        name={this.name}
        type={this.type}
        ig={this.ig}
      >
        <Question>What’s the last song you played?</Question>
        <Answer>Beats, Hoes, and Rhymes by Dom Kennedy ft. Cassie Veggies and Schoolboy Q on the album From the Westside with Love II. This song is so west coast. A nostalgic song for me. It came out when I was a fashion student desiring to be in LA bumping this song while driving. I started playing it last night when I was scooting to my favorite Hollywood taco truck. It took me back a little bit and reminded me how far I've come. If you haven't heard the song, give it a listen. Not a lot of depth to it but good vibes overall.  A good lil slap from Dom.</Answer>

        <Question>What do you want to see happen in the Seattle creative scene?</Question>
        <Answer>I'd love to see more people be unapologetic about throwing more art shows, pop-ups, parties, exhibits, exhibitions, dance performances, haunted houses, etc... Whatever the fuck you do, do it and be loud about it. There's nothing like friendly competition to raise the bar in Seattle. That's what Seattle needs. More people gaining the confidence to do their thing to the best of their ability. Doesn't mean people will come out and support and show all the love, but it's important for the scene to keep it moving.Your peers/elders might not be watching, but the youth are always watching. You’re gonna influence somebody if you like it or not.</Answer>
        <Answer>Theres so much fucking talent in Seattle that most people don't know about because people "Aren't ready yet". I'm one of those people. The longer you wait the harder it becomes. Do it already.</Answer>

        <Question>How do you create opportunities for yourself?</Question>
        <Answer>You have to start somewhere. A lot of the battle is showing up and mustering up the courage to ask the right people the right questions. Other people can only give you so much opportunity. The rest is on you to put the work in and prove yourself.</Answer>
      </Content>
    );
  }
};
const CONNIE = {
  name: 'Connie',
  ig: 'djunohu',
  id: 'connie',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>What’s the most rewarding part of what you do?</Question>
        <Answer>The most rewarding part of being a DJ is creating positive memories for others.  I love when people approach me during a set to tell me how much they are enjoying themselves and when I can see happy faces in the crowd and feel their energy.  I also get to meet a bunch of talented DJs and creatives through events that I've become great friends with.</Answer>

        <Question>How do you feel like your upbringing has influenced your work?</Question>
        <Answer>Growing up, I played piano and flute.  Music has always been a huge part of my existence through playing classical music and listening to the soft rock my dad played.  These are probably the reasons why I most enjoy playing throwbacks and R&B.  The aforementioned genres all share an underlying feeling of warmth and familiarity that can make any person smile and glow.</Answer>

        <Question>How do you create opportunities for yourself?</Question>
        <Answer>I create opportunities for myself by being true to myself and focusing on building relationships.  When you know and love yourself, you will attract others who can relate and create bonds that are mutually beneficial.</Answer>
      </Content>
    );
  }
};
const DANIEL = {
  name: 'Daniel',
  type: 'Prototype Sessions',
  ig: 'ecks',
  id: 'daniel',
  get content() {
    return (
      <Content
        name={this.name}
        type={this.type}
        ig={this.ig}
      >
        <Question>What would you say you’re best known for (your signature, your “thing”) and what would you say is the biggest misconception about you or what you do?</Question>
        <Answer>I guess I don’t really have one “thing” but a spectrum of mediums I use to express different parts of myself. A few examples I focus on are clothing and music. I use clothing to exercise raw skill and creativity and to challenge my ideas of concepts and design in real life. I mix songs and record mixes to express emotion and feeling through sound and mixing songs live is a way to share the feelings and connect with an audience in real time.</Answer>

        <Question>How do you feel like your upbringing has influenced your work?</Question>
        <Answer>My upbringing has definitely not only influenced my work, but has definitely guided its path. My Dad was in the US Navy and my Mom is from Canada which made me a dual citizen nomad. I’ve lived around the world and all around the US and I take a lot from each place I’ve lived, most notably in Japan and Vancouver.</Answer>

        <Question>What’s next for you?</Question>
        <Answer>Create more.</Answer>
      </Content>
    );
  }
};
const HARRY = {
  name: 'Harry',
  ig: 'harry_clean',
  id: 'harry',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>How do you feel like your upbringing has influenced your work?</Question>
        <Answer>My upbringing influenced my work because we ain’t had shit so we had to make art to stay outta trouble. Got good at it on accident, now we winnin’.</Answer>

        <Question>People often choose to leave Seattle to pursue a career as a creative. Do you feel see yourself staying in Seattle or relocating to other markets / communities?</Question>
        <Answer>I’ll always have a home in (Souf) Seattle but I plan to purchase spots in other cities/countries in the future. I like getting out of here when it gets too cold. </Answer>

        <Question>What do you want to see happen in the Seattle creative scene?</Question>
        <Answer>I want to see people be more “creative”. Stop copying what you see on the internet. Let’s push it to another level. Create something new or innovative. Cuz right now there’s just a bunch of clones.</Answer>

        <Question>How do you create opportunities for yourself?</Question>
        <Answer>By staying positive and never stop working.</Answer>

        <Question>What’s next for you?</Question>
        <Answer>Producing content for Paradice TV and working with the homie Jay Park & H1GHRMUSIC.</Answer>
      </Content>
    );
  }
};
const HC = {
  name: 'Human Condition',
  ig: 'h_mancondition',
  id: 'hc',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>How do you feel social media has played into what you do and how it’s received?</Question>
        <Answer>Social media has an interesting role in the work that we do. We focus a great deal of our attention to the physical world by creating a magazine that you can flip through and put on your coffee table, and we throw events that bring people together and start new conversations between creatives. But at the same time, social media is what continues to drive our following and where we can go moving forward. Without a presence on social media we would be irrelevant.</Answer>

        <Question>What’s the most rewarding part of what you do?</Question>
        <Answer>Getting to overhear people at our events say “This is so cool, I’ve never been to something like this” or to see the artists who we feature in our magazine flip through it and see their work in print for the first time.</Answer>

        <Question>What do you want to see happen in the Seattle creative scene?</Question>
        <Answer>We want to see more collaboration, more work being put out, more media attention, and more money getting fueled into the creative scene to make it sustainable for all of us out here grinding.</Answer>

        <Question>What is it about Seattle that fuels your creative lifestyle?</Question>
        <Answer>The majority of us grew up in Seattle or near Seattle, and that’s something that defines the work that we do. We’re very focused on creating the best we can for this city and the people in it. The way people in this city are able to rally around their peers’ work is something that inspires us everyday. </Answer>
      </Content>
    );
  }
};
const JORDAN = {
  name: 'Jordan',
  ig: 'jordanloves.life',
  id: 'jordan',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>What’s the most rewarding part of what you do?</Question>
        <Answer>The most rewarding part is also the scariest and most anxiety-inducing part; that it’s all on me. I set out on a mission to turn my once-hobbies into a full time career and if I fail in that endeavor I know that I’ll have no one else to blame but myself. Scary thought, but as terrifying as that can be, there’s this excitement that I’m not sure many people in this world ever truly get to experience and it comes from knowing that I am the master of my own destiny. I’m in control of what happens next. There’s seemingly no limit to how far this can go. The trajectory my life takes is ultimately bounded only by my own imagination and drive!</Answer>

        <Question>What does success look like to you?</Question>
        <Answer>Success to me looks like loving where you’re at, while always striving to do better. That’s not to say that your current situation has to be perfect for you to love it. Success for me is the knowledge that regardless of circumstance, at this very moment, (whether I like it or not) I’m where I’m meant to be. Life’s a marathon, a process.. and the trick is learning to love every step of the process.</Answer>

        <Question>What is it about Seattle that fuels your creative lifestyle?</Question>
        <Answer>I grew up in South Seattle which apparently at some point was one of the most diverse places in all of America. Growing up in a community like that has made me a pretty eclectic person with lots of different interests and an appreciation for all kinds of people! I think humans are the most interesting (and beautiful!) things ever. And so a lot of my work is just me documenting a wide spectrum of people and experiences.</Answer>

        <Question>What do you want to see happen in the Seattle creative scene?</Question>
        <Answer>Let’s come together like voltron.</Answer>
      </Content>
    );
  }
};
const JUSTIN = {
  name: 'Justin',
  ig: 'justinsofresh',
  id: 'justin',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>How do you feel social media has played into what you do and how it’s received?</Question>
        <Answer>At its core it's cool to see what's going on around me, I just never let it influence what I do. It's easy to subconsciously run with what everyone else is doing so I keep it minimal, check once when I wake up, and once late in the afternoon. Social media makes all of us local and that's my favorite part about it. On how my work is received is a tough one because by nature I'm lowkey so for now they sleep on me but just know the wake up gon' hurt a lil. </Answer>

        <Question>How do you feel like your upbringing has influenced your work?</Question>
        <Answer>I was taught to value the concept of hard work, getting your hands dirty, being the architect to your ideas, and to be unselfish with the opportunities I create. If that doesn't show in my work then I'm failing.</Answer>

        <Question>People often choose to leave Seattle to pursue a career as a creative. Do you see yourself staying in Seattle or relocating to other markets / communities?</Question>
        <Answer>Seattle is home but ideally I want to be operating from multiple cities around the world, mostly remote. Without a doubt I'm most inspired when I'm on the road. The feeling of visiting a new place for the first time is so fire. As long as I got a camera, work ethic, and my mind intact I can survive anywhere in the world. Adding diversity to my palette keeps me creative.</Answer>

        <Question>What’s next for you?</Question>
        <Answer>You'll see.</Answer>
      </Content>
    );
  }
};
const KHAN = {
  name: 'Khan',
  type: 'The Folks Collective',
  ig: 'toneyvibez',
  id: 'khan',
  get content() {
    return (
      <Content
        name={this.name}
        type={this.type}
        ig={this.ig}
      >
        <Question>What does success look like to you?</Question>
        <Answer>In my opinion success and accomplishments are the same. I don’t really believe in “being successful,” because once you are successful, doesn’t that put a finish line to what you do?</Answer>

        <Question>People often choose to leave Seattle to pursue a career as a creative. Do you see yourself staying in Seattle or relocating to other markets / communities?</Question>
        <Answer>I may live somewhere for a little bit, but not to stay or even plan to build there. I don’t want to leave Seattle. I think building and making something here could be really good for the city and community.</Answer>

        <Question>What do you want to see happen in the Seattle creative scene?</Question>
        <Answer>I want to see more events where it’s not just a club event but more creatives working together or articulating their creative thoughts to each other. Also more live performances where people actually show up and can sit and watch someone do something dope.</Answer>
      </Content>
    );
  }
};
const NATALIE = {
  name: 'Natalie',
  ig: 'nataliehuy',
  id: 'natalie',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>What’s the most rewarding part of what you do?</Question>
        <Answer>The most rewarding part of what I do would be inspiring others through my stories I produce. I love interviewing creatives because their stories inspire me and others in the creative field. I’ve also met a lot of great people through video journalism and have maintained friendships.</Answer>

        <Question>How do you create opportunities for yourself?</Question>
        <Answer>Just gotta start your own shit so that you can rely on yourself.</Answer>

        <Question>How do you feel like your upbringing has influenced your work?</Question>
        <Answer>I grew up watching MTV, TRL, Oprah, etc. at my grandmas house while my mom would be working, so I was heavily interested in music and entertainment at a young age.</Answer>
      </Content>
    );
  }
};
const NYT = {
  name: 'Not Your Type',
  ig: 'wearenyt',
  group: [
    {
      name: 'Alleah',
      ig: 'alleahl'
    },
    {
      name: 'Paulina Montiel',
      ig: '_theycallmepau_'
    },
    {
      name: 'Louisa Meng',
      ig: 'whatupmeng'
    }
  ],
  id: 'nyt',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
        group={this.group}
      >
        <Question>What’s the most rewarding part of what you do?</Question>
        <Answer>Working with other creatives, my NYT girls, and finally doing something that is so 100% me through and through it hurts. Regardless of what happens, that's something I can be proud of because it's the first time I really started investing in myself for myself.</Answer>

        <Question>How do you feel social media has played into what you do and how it’s received?</Question>
        <Answer>Social media can be a very polarizing thing - it's a huge component of how I reach my audience because it provides a substantial, accessible platform. It makes starting a brand and business operation from my apartment feasible.</Answer>
        <Answer>I also have to constantly challenge the limitations of social media - am I relying too heavily on it, is it inhibiting person to person interactions with my audience? Is it creatively hindering what I do to an iPhone screen? Am I relying it too much as a source for inspiration, scouting, etc.?</Answer>
        <Answer>I am a product of and a slave to social media - but it's important that we are always thinking critically of our contribution and consumption.</Answer>

        <Question>What’s next for you?</Question>
        <Answer>Self-realization coming to fruition.</Answer>
      </Content>
    );
  }
};
const PRIMO = {
  name: 'Primo',
  type: 'The Folks Collective',
  ig: 'homieprimo',
  id: 'primo',
  get content() {
    return (
      <Content
        name={this.name}
        type={this.type}
        ig={this.ig}
      >
        <Question>What’s the most rewarding part of what you do?</Question>
        <Answer>The most rewarding part of what I do is it builds more self-appreciation for myself. I used to want to be like other people so bad, I lost who I really was. Producing my art is not just expressing who I am, it’s like looking into a mirror. Seeing my reflection internally. From there it’s about using the energy I gave myself and spreading it to the people around me to influence others self appreciation and drive.</Answer>

        <Question>How do you create opportunities for yourself?</Question>
        <Answer>I create opportunities for myself by staying optimistic and humble. Being accepting and focused. When you are 10 toes down, whatever’s thrown at you will be finessed. Carrying yourself in a strong way will bring you what you truly seek. With that being said also being friendly and a homie to everyone is key. There’s never nothing wrong with making more friends. People will end up wanting to kick it or work with you. When you present good vibes all the time, the opportunities will present themselves.</Answer>

        <Question>How do you feel social media has played into what you do and how it’s received?</Question>
        <Answer>Social media is a great way to showcase what I’ve been through in my career and to project my world and character. I’ve booked gigs and met with cool people by just my instagram.</Answer>
      </Content>
    );
  }
};
const REINA = {
  name: 'Reina',
  ig: 'wetnegatives',
  id: 'reina',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>What’s the most rewarding part of what you do?</Question>
        <Answer>Developing my own film.</Answer>

        <Question>What’s next for you?</Question>
        <Answer>Art. Show.</Answer>

        <Question>How do you feel like your upbringing has influenced your work?</Question>
        <Answer>Growing up, my mom had movies from the 20’s to the 80’s playing in the background. She loved music and had records and CD’s everywhere. Music and media were always present in our home, but it was her retro style that influenced me to appreciate what she grew up with. I try to incorporate that nostalgic feeling into the setting and style of my photos.</Answer>
      </Content>
    );
  }
};
const SHU = {
  name: 'Shu',
  ig: 'shuj0',
  id: 'shu',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>How do you feel like your upbringing has influenced your work?</Question>
        <Answer>I had to figure a lot of stuff out myself growing up and along with the ambiguity of being biracial,
          I never fit into a box so in a way I was free to absorb things from both cultures and define myself.
          I embrace that ambiguity.
        </Answer>

        <Question>What’s the most rewarding part of what you do?</Question>
        <Answer>Getting shook. Being blindsided by something new in a sense that you get enough of a understanding of it to understand that you really know nothing. It’s humbling and motivating and keeps things interesting.</Answer>

        <Question>What do you want to see happen in the Seattle creative scene?</Question>
        <Answer>Openness, vulnerability, inclusivity, cross pollination.</Answer>
      </Content>
    );
  }
};
const TTWINS = {
  name: 'Ttwins',
  type: 'Laidback Allure',
  ig: 't_twins_',
  group: [
    {
      name: 'Tenoa Spencer',
      ig: 'tenoaspencer'
    },
    {
      name: 'Terrence Spencer',
      ig: 'tmacksway'
    }
  ],
  id: 't-twins',
  get content() {
    return (
      <Content
        name={this.name}
        type={this.type}
        ig={this.ig}
        group={this.group}
      >
        <Question>What does success look like to you?</Question>
        <Answer>Success to me is being able to have people around you that you care about and love and then being able to enjoy a stable and fun life whether it’s financially successful or not.</Answer>

        <Question>People often choose to leave Seattle to pursue a career as a creative. Do you see yourself staying in Seattle or relocating to other markets / communities?</Question>
        <Answer>That's a good question as of right now I don't think I can leave Seattle without making sure that I have a legacy here that will continue on. But with that being said, I personally still want to grow as a creative so relocating is definitely not out of the question.</Answer>

        <Question>What do you want to see happen in the Seattle creative scene?</Question>
        <Answer>I want to see more collaborations more creative exposé and events that get a national presence to highlight Seattle creative scene</Answer>

        <Question>What’s next for you?</Question>
        <Answer>What's next for me is to continue to become an industry choreographer / dancer and also grow our brand <Link href="http://www.laidbackallure.com/">http://www.laidbackallure.com/</Link></Answer>
      </Content>
    );
  }
};
const TAYLOR = {
  name: 'Taylor',
  ig: 'razberryberetta',
  id: 'taylor',
  get content() {
    return (
      <Content
        name={this.name}
        ig={this.ig}
      >
        <Question>How do you feel social media has played into what you do and how it’s received?</Question>
        <Answer>Social media is the most important tool for this whole warehouse bidness. Back in the day I saw they had pagers, anonymous telephone hotlines, and just word of mouth. Now we have all of that on steroids. We're def plugged in the matrix. In less than 6 hours, we can gather 200+ people in one space with just a few tweets and a Instagram video. 500+ if you give us a week lol.</Answer>

        <Question>People often choose to leave Seattle to pursue a career as a creative. Do you see yourself staying in Seattle or relocating to other markets / communities?</Question>
        <Answer>Def want to leave and see what I can accomplish in another part of the world. I feel like everyone should try that at least once.</Answer>

        <Question>What is it about Seattle that fuels your creative lifestyle?</Question>
        <Answer>I grew up in the suburbs way down south of Seattle. Huge lack of creative resources and events that me and my friends thought was cool. So any chance I had to hang in Seattle I was always really observant and just eager to learn. That's def influenced how I work today.</Answer>
      </Content>
    );
  }
};
const TRAVEE = {
  name: 'Travee',
  type: 'The Folks Collective',
  ig: 'folktravee',
  id: 'travee',
  get content() {
    return (
      <Content
        name={this.name}
        type={this.type}
        ig={this.ig}
      >
        <Question>What does success look like to you?</Question>
        <Answer>Success to me looks like me traveling the world and inspiring people.</Answer>

        <Question>What’s the last photo on your camera roll?</Question>
        <Answer>The last photo on my camera roll is with me in a jacket doing a Folk Lean.</Answer>

        <Question>People often choose to leave Seattle to pursue a career as a creative. Do you see yourself staying in Seattle or relocating to other markets / communities?</Question>
        <Answer>I honestly feel myself staying here and just putting Seattle on the map. I want to see Seattle as a whole artistic movement just people vibing and doing what they do best.</Answer>

        <Question>How do you feel social media has played into what you do and how it’s received?</Question>
        <Answer>I think social media has played a big role into dancing because I can just automatically bust a camera out and start dancing and then upload it on social media so everyone can see, you know?</Answer>
      </Content>
    );
  }
};
const ZAYDI = {
  name: 'Zaydi',
  type: 'The Folks Collective',
  ig: 'folkzaydi',
  id: 'zaydi',
  get content() {
    return (
      <Content
        name={this.name}
        type={this.type}
        ig={this.ig}
      >
        <Question>How do you feel social media has played into what you do and how it’s received?</Question>
        <Answer>I definitely think that social media helped me blow up in my immediate area. Everyone knows what I can do without me having to do it right in front of them.</Answer>

        <Question>What does success look like to you?</Question>
        <Answer>Success is whatever makes you happy.</Answer>

        <Question>What’s the most rewarding part of what you do?</Question>
        <Answer>I think the most rewarding part of what I do is teaching dance. When I can help individuals grow in their art, it is a really fun thing to do. It's nice to help people grow in what they truly love.</Answer>
      </Content>
    );
  }
};

export default [
  TRAVEE,
  KHAN,
  PRIMO,
  ZAYDI,
  AVI,
  CLINT,
  DANIEL,
  JUSTIN,
  ANTHONY,
  TTWINS,
  JORDAN,
  REINA,
  TAYLOR,
  SHU,
  HARRY,
  CONNIE,
  NATALIE,
  NYT,
  HC
];
