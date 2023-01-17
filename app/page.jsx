'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.scss'
import { Col, Container, Row } from 'reactstrap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={`${styles.banner} text-center`}>
        <Container>
          <Row>
            <Col>
              <h1>All-In-One Platform for <br /> Global Growth</h1>
              <p>Achieve new levels of productiveness & reduce the costs and<br />
                errors associated with manual tasks</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`${styles.aboutSec}`}>
        <Container>
          <Row className='justify-content-center'>
            <Col className='col-md-9'>
              <div className={`${styles.domainSearch}`}>
                <Row>
                  <Col className='col-md-6'>
                    <h3 className='fw-semibold text-start'>Domain Name Search <br /> Buy a Domain In Minutes</h3>
                  </Col>
                  <Col className='col-md-6'>
                    <p className='text-end'>Your domain helps people find you online and makes a first impression. Find one that represents you perfectly.</p>
                  </Col>
                  <Col className='col-md-12'>
                    <div className={`${styles.inputField}`}>
                      <input className='form-control' type="email" placeholder='Enter the domain of your choice' />
                      <button className="btn btn-md btn-primary text-light" type='submit'>Search Domain</button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className='col-md-6'>
              <h2 className='mb-5'>Say Hello to <span>Maze Digital</span></h2>
              <h4 className='mb-3'>Excelling in Security and Protection</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}
