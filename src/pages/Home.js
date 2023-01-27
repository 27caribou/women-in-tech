import React, { useState } from "react"
import "./Home.css"
import { Modal } from "../components/modal/modal"

const w1Modal = () => (
  <>
    <h1>Workshop 1</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti suscipit
      distinctio optio repudiandae, facilis earum quam eum ut sunt qui unde vel
      recusandae porro ab, atque facere, aliquid ad nam minima soluta ducimus in
      voluptatem. Repudiandae fugit pariatur quasi voluptates eius, nostrum illo
      id, blanditiis vero ut molestias eaque amet?
    </p>
  </>
)

const w2Modal = () => (
  <>
    <h1>Workshop 2</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti suscipit
      distinctio optio repudiandae, facilis earum quam eum ut sunt qui unde vel
      recusandae porro ab, atque facere, aliquid ad nam minima soluta ducimus in
      voluptatem. Repudiandae fugit pariatur quasi voluptates eius, nostrum illo
      id, blanditiis vero ut molestias eaque amet?
    </p>
  </>
)

const summitModal = () => (
  <>
    <h1>Summit</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti suscipit
      distinctio optio repudiandae, facilis earum quam eum ut sunt qui unde vel
      recusandae porro ab, atque facere, aliquid ad nam minima soluta ducimus in
      voluptatem. Repudiandae fugit pariatur quasi voluptates eius, nostrum illo
      id, blanditiis vero ut molestias eaque amet?
    </p>
  </>
)

export const Home = () => {
  const [modal, setModal] = useState("")

  const modals = {
    workshop1: w1Modal,
    workshop2: w2Modal,
    summit: summitModal,
  }

  // make sure to name matches key of modal in modals
  const openModal = (name) => setModal(name)

  const closeModal = () => setModal("")

  return (
    <>
      <div className="hero">
        <div className="inner">
          <h1>
            WOMEN IN TECH <br /> SUMMIT 2023
          </h1>
          <h2>January 29, 2023</h2>
        </div>
      </div>
      <div className="intro-section">
        <div className="inner">
          <div className="div1">
            <h2 className="purple">
              The Largest Women in Technology Conference in Canada
            </h2>
            <p className="text">[Provided paragraph]</p>
          </div>
          <div className="div2">
            <h2>Workshops & Events</h2>
            <div>
              <button
                className="workshop-button"
                onClick={() => openModal("workshop1")}
              >
                Workshop 1
              </button>
              <button
                className="workshop-button"
                onClick={() => openModal("workshop2")}
              >
                Workshop 2
              </button>
              <button
                className="workshop-button"
                onClick={() => openModal("summit")}
              >
                Summit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="numbers">
        <div className="inner">
          <div className="numbers-cols">
            <div className="col">
              <h3>+XYZ</h3>
              <h3>Stat</h3>
            </div>
            <div className="col">
              <h3>+XYZ</h3>
              <h3>Stat</h3>
            </div>
            <div className="col">
              <h3>+XYZ</h3>
              <h3>Stat</h3>
            </div>
            <div className="col">
              <h3>+XYZ</h3>
              <h3>Stat</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="event-details">
        <div className="inner">
          <h2>What will the event day look like?</h2>
          <div className="grid">
            <button className="booths">Networking Booths</button>
            <button className="competition">Interview Competition</button>
            <button className="speakers">Keynote Speakers</button>
            <button className="etc">etc</button>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="inner">
          <h1>WHY ATTEND?</h1>
          <div className="testimonial-list">
            <div className="testimonial">[testimonials]</div>
          </div>
        </div>
      </div>
      <div className="sponsors">
        <div className="inner">
          <h1>OUR FEATURED SPONSORS</h1>
          <div className="sponsor-list">
            <div className="sponsor">[Sponsor]</div>
            <div className="sponsor">[Sponsor]</div>
            <div className="sponsor">[Sponsor]</div>
            <div className="sponsor">[Sponsor]</div>
            <div className="sponsor">[Sponsor]</div>
          </div>
        </div>
      </div>
      {modal && (
        <Modal open={modal} onClose={closeModal}>
          {modals[modal]()}
        </Modal>
      )}
    </>
  )
}
