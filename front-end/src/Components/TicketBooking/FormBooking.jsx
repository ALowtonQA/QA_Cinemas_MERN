import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Row, Col, Button, Form, FormGroup, Label, Input, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import InteractiveCalendar from './InteractiveCalender';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const FormBooking = ({ data }) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpenTwo, setDropdownOpenTwo] = useState(false);
    const [dropdownOpenThree, setDropdownOpenThree] = useState(false);
    const [dropdownOpenMovie, setDropdownOpenMovie] = useState(false);
    const [dropdownOpenMovieTimes, setDropdownOpenMovieTimes] = useState(false);
    const [dropdownConcessions, setDropdownConcessions] = useState(false);

    const [name, setName] = useState("");
    const [adults, setAdults] = useState("Adults");
    const [child, setChildren] = useState("Children");
    const [concession, setConcession] = useState("Concession");
    const [seats, setSeats] = useState("Seats");
    
    const [selectedMovie, setSelectedMovie] = useState("Movies");
    const [selectedTime, setSelectedTime] = useState("Times for " ,{selectedMovie});
    const [showingTimes, setShowingTimes] = useState([]);
    const [times, setTimes] = useState([]);
    
    const [days, setDays] = useState([]);
    const [date, setDate] = useState(new Date());

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggleTwo = () => setDropdownOpenTwo(prevState => !prevState);
    const toggleThree = () => setDropdownOpenThree(prevState => !prevState);
    

    const toggleMovie = () => setDropdownOpenMovie(prevState => !prevState);
    const toggleMovieTimes = () => setDropdownOpenMovieTimes(prevState => !prevState);
    const toggleConcessions = () => setDropdownConcessions(prevState => !prevState);

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const changeDate = (date) => {
        setDate(date);
    };

    useEffect(() => {
        let daysArr = [];
        for (let obj of data) {
            if (obj.title === selectedMovie) {
                setShowingTimes(obj.showingTimes);
                for (let entry of obj.showingTimes) {
                    daysArr.push(daysOfWeek.indexOf(entry.day));
                    if (entry.day === daysOfWeek[date.getDay()]) {
                        setTimes(entry.times);
                    }
                }
            }
        }
        setDays(daysArr);
    }, [selectedMovie, date]);

    const submitBooking=(e)=>{
        e.preventDefault();

        const obj = {
            movieTitle : selectedMovie,
            date : date,
            time : selectedTime,
            name : name, 
            numberOfSeats: seats,
            adults : adults,
            child: child,
            concession: concession
        }
        axios
            .post("http://localhost:8080/bookings/post", obj)
            .then((res) => {
                console.log(res);
                // setAdults(0);
                // setChildren(0);
                // setSeats(0);
                // setSelectedMovie("");
                // setShowingTimes([]);
                // setDate([])
            })
            .catch((err) => {
                console.log(err.message);
            })
        }

    return (
        <>
            <Form onSubmit={submitBooking}>
                <h5 style={{ fontWeight: 'bold' }}>Name:</h5>
                <Input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />

                <br />
                <h5 style={{ fontWeight: 'bold' }}>Select the Movie</h5>

                <Dropdown isOpen={dropdownOpenMovie} toggle={toggleMovie} size="sm" >
                    <DropdownToggle caret>
                        {selectedMovie}
                    </DropdownToggle>
                    <DropdownMenu>
                        {
                            data.map((obj, i) => (
                                <DropdownItem onClick={(e) => setSelectedMovie(obj.title)} key={i} >{obj.title}</DropdownItem>
                            ))
                        }
                    </DropdownMenu>
                </Dropdown>

                <br />

                <Row>
                    <h5 style={{ fontWeight: 'bold' }}>Adult, Children , seats and concessions</h5>
                    <Col sm="2">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm" >
                            <DropdownToggle caret>
                                {adults}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem value={1} onClick={(e) => setAdults(e.target.value)}>1</DropdownItem>
                                <DropdownItem value={2} onClick={(e) => setAdults(e.target.value)}>2</DropdownItem>
                                <DropdownItem value={3} onClick={(e) => setAdults(e.target.value)}>3</DropdownItem>
                                <DropdownItem value={4} onClick={(e) => setAdults(e.target.value)}>4</DropdownItem>
                                <DropdownItem value={5} onClick={(e) => setAdults(e.target.value)}>5</DropdownItem>
                                <DropdownItem value={6} onClick={(e) => setAdults(e.target.value)}>6</DropdownItem>
                                <DropdownItem value={7} onClick={(e) => setAdults(e.target.value)}>7</DropdownItem>
                                <DropdownItem value={8} onClick={(e) => setAdults(e.target.value)}>8</DropdownItem>
                                <DropdownItem value={9} onClick={(e) => setAdults(e.target.value)}>9</DropdownItem>
                                <DropdownItem value={10} onClick={(e) => setAdults(e.target.value)}>10</DropdownItem>
                            </DropdownMenu>

                        </Dropdown>
                    </Col>

                    <Col sm="2">
                        <Dropdown isOpen={dropdownOpenTwo} toggle={toggleTwo} size="sm" >
                            <DropdownToggle caret>
                                {child}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem value={1}  onClick={(e) => setChildren(e.target.value)}>1</DropdownItem>
                                <DropdownItem value={2} onClick={(e) => setChildren(e.target.value)}>2</DropdownItem>
                                <DropdownItem value={3} onClick={(e) => setChildren(e.target.value)}>3</DropdownItem>
                                <DropdownItem value={4} onClick={(e) => setChildren(e.target.value)}>4</DropdownItem>
                                <DropdownItem value={5} onClick={(e) => setChildren(e.target.value)}>5</DropdownItem>
                                <DropdownItem value={6} onClick={(e) => setChildren(e.target.value)}>6</DropdownItem>
                                <DropdownItem value={7} onClick={(e) => setChildren(e.target.value)}>7</DropdownItem>
                                <DropdownItem value={8} onClick={(e) => setChildren(e.target.value)}>8</DropdownItem>
                                <DropdownItem value={9} onClick={(e) => setChildren(e.target.value)}>9</DropdownItem>
                                <DropdownItem value={10} onClick={(e) => setChildren(e.target.value)}>10</DropdownItem>
                            </DropdownMenu>

                        </Dropdown>
                    </Col>

                    <Col sm="2">
                        <Dropdown isOpen={dropdownOpenThree} toggle={toggleThree} size="sm" >
                            <DropdownToggle caret>
                                {seats} 
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem value={1} onClick={(e) => setSeats(e.target.value)}>1</DropdownItem>
                                <DropdownItem value={2} onClick={(e) => setSeats(e.target.value)}>2</DropdownItem>
                                <DropdownItem value={3} onClick={(e) => setSeats(e.target.value)}>3</DropdownItem>
                                <DropdownItem value={4} onClick={(e) => setSeats(e.target.value)}>4</DropdownItem>
                                <DropdownItem value={5} onClick={(e) => setSeats(e.target.value)}>5</DropdownItem>
                                <DropdownItem value={6} onClick={(e) => setSeats(e.target.value)}>6</DropdownItem>
                                <DropdownItem value={7} onClick={(e) => setSeats(e.target.value)}>7</DropdownItem>
                                <DropdownItem value={8} onClick={(e) => setSeats(e.target.value)}>8</DropdownItem>
                                <DropdownItem value={9} onClick={(e) => setSeats(e.target.value)}>9</DropdownItem>
                                <DropdownItem value={10} onClick={(e) => setSeats(e.target.value)}>10</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    

                    <Col sm="2">
                        <Dropdown isOpen={dropdownConcessions} toggle={toggleConcessions} size="sm" >
                            <DropdownToggle caret>
                                {concession}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem value={1} onClick={(e) => setConcession(e.target.value)}>1</DropdownItem>
                                <DropdownItem value={2} onClick={(e) => setConcession(e.target.value)}>2</DropdownItem>
                                <DropdownItem value={3} onClick={(e) => setConcession(e.target.value)}>3</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>

                    
                </Row>


                            
                

                <div>
                    <h5 style={{ fontWeight: 'bold' }}>Select a Date</h5>
                    <Calendar
                        // maxDate={}
                        minDate={new Date()}
                        onChange={changeDate}
                        value={date}
                        tileDisabled={({ activeStartDate, date, view }) => !days.includes(date.getDay())}
                    />
                </div>

                <br />

                <h5 style={{ fontWeight: 'bold' }}>Select the time</h5>
                <Dropdown isOpen={dropdownOpenMovieTimes} toggle={toggleMovieTimes} size="sm" >
                    <DropdownToggle caret>
                       {selectedTime}
                    </DropdownToggle>
                    <DropdownMenu>
                        {
                            times.map((time, i) => (
                                <DropdownItem onClick={(e) => setSelectedTime(time)} key={i} >{time}</DropdownItem>
                            ))
                        }
                    </DropdownMenu>
                </Dropdown>
                <br />
                <Button color="primary" type="submit">Send</Button>
            </Form>
        </>
    )
}


export default FormBooking;