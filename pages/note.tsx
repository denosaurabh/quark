import Link from 'next/link'
import { styled } from '@/stitches.config'

const NoteForOrganizers = () => {
  return (
    <NoteForOrganizersContainer>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <h2>Note for Hackathon Organizers|Judges|Community</h2>
        <p>
          Thank you soo much for organizing this hackathon, I have learned so
          much during this time
        </p>

        <section>
          <h6>Little about denosaurabh (Saurabh Gupta)</h6>
          <p>
            Hi, I am denosaurabh, 17 years old Creative developer & Designer
            from India.
          </p>
        </section>
        <section>
          <h6>About this project</h6>
          <p>A NFT marketplace in a interactive 3d experience.</p>
        </section>
        <section>
          <h6>Applicable Categories</h6>
          <ul>
            <li>-Core Prizes</li>
            <li>-Best NFT/Gaming </li>
            <li>-Community Choice Projects</li>
            <li>-Prize Pool</li>
            <li>-Best metaverse tooling project</li>
          </ul>
        </section>
        <section>
          <h6>Other details about the Project</h6>
          <ul>
            <li>
              - All the code, artwork and 3d models are exclusively made by
              denosaurabh. Except for the
              <a
                href='https://nimblebeastscollective.itch.io/magosfonts'
                target='_blank'
                rel='noreferrer'
              >
                Font Used
              </a>
            </li>
            <li>
              - The project is made only during the timeline of hackathon
              (19Nov-12Dec 2021), including the code, 3d models, art & design.
            </li>
            <li>
              - The source code for the project is currently private, I do have
              some plans for making it open source, but I cant promise for now.
              But, If you are an organizer or judge and want to see the code for
              proof or other purposes, please contact.
            </li>
          </ul>
        </section>
        <section>
          <h6>Contact & Social</h6>
          <ul>
            <li>
              <a href='https://denosaurabh.me' target='_blank' rel='noreferrer'>
                -Portfolio
              </a>
            </li>

            <li>
              <a
                href='https://github.com/denosaurabh'
                target='_blank'
                rel='noreferrer'
              >
                -Github
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/DenoSaurabh'
                target='_blank'
                rel='noreferrer'
              >
                -Twitter
              </a>
            </li>
            <li>
              <a
                href='https://dribbble.com/denosaurabh'
                target='_blank'
                rel='noreferrer'
              >
                -Dribbble
              </a>
            </li>
            <li>
              <a
                href='https://behance.net/denosaurabh'
                target='_blank'
                rel='noreferrer'
              >
                -Behance
              </a>
            </li>
            <br />
            <li>
              <a href='mailto:denosaurabh@gmail.com'>denosaurabh@gmail.com</a>
            </li>
          </ul>
        </section>
      </div>
    </NoteForOrganizersContainer>
  )
}

export default NoteForOrganizers

const NoteForOrganizersContainer = styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8rem',

    width: '95%',
    maxWidth: '80rem',

    padding: '6rem 0',
    color: '#292929',

    fontFamily: '$display',

    h2: {
      fontSize: '8rem',
      textDecoration: 'underline',
      lineHeight: '50px',
    },

    p: {
      fontSize: '4rem',
    },

    a: {
      fontSize: '4rem',
      margin: '0 1rem',
      textDecoration: 'underline',
    },

    section: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',

      lineHeight: '30px',

      h6: {
        fontSize: '4rem',
        textDecoration: 'underline',
      },

      p: {
        fontSize: '4rem',
      },

      a: {
        margin: '0 1rem',
        textDecoration: 'underline',
      },

      ul: {
        li: {
          listStyle: 'none',
          fontSize: '4rem',
        },
      },
    },
  },
})
