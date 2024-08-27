import React from 'react'

function MeetingChat() {
    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col-12 col-md-8 mb-4">
                    <div className="card text-center ms-2 p-3 h-100 meeting-card">
                        <div className="card-body d-flex flex-column align-items-center justify-content-center">
                            <p className="meeting-card-text">How an Idea You Want to Bring to Life?</p>
                            <h3 className="heading-3 gradient-3 ">Everything you need. Nothing you don’t</h3>
                            <a href="https://wa.me/8801540110050" className="btn btn-light  py-1 px-4" target='_blank'>Schedule a Meeting</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <div className="card text-center mx-2 p-3 h-100 bg-primary text-light">
                        <div className="card-body">
                            <h5 className="card-title">Live Chat</h5>
                            <p className=" p-0">We will help you to increase growth of your business. Our dedicated effective team members are here to lend a hand, for what you need.</p>
                            <a href="https://wa.me/8801540110050" className="btn btn-light  py-1 px-4 mt-auto" target='_blank'>Start Live Chat</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetingChat;