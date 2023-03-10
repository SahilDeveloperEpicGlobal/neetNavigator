/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Paper from "@mui/material/Paper";
import Checkbox from "../src/components/checkbox/index";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import {
  Autocomplete,
  // Checkbox,
  Grid,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Container } from "@mui/system";
import { Label } from "@mui/icons-material";
import Header from "./components/header";
import Footer from "./components/footer";
import GraphSidebar from "./components/graphsidebar";
// import { Checkbox } from "@mui/material";
// import Checkbox from "@mui/material/Checkbox";
function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),
  createData("Eclair", 262, 16.0, 24),
  createData("Cupcake", 305, 3.7, 67),
];
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Coloumn = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
]

const rowsNew = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
function App() {
  return (
    <>
      {/* <div className="section2">
    <h1>650</h1>
    <h1>Number of Medical </h1>
    <h1>colleges in <strong>India</strong></h1>
   </div> */}
      <Container>
      <Header />
     <div className="mainsection">
     <div className="section1">
      <Grid container spacing={10}>
          <Grid item xs={12} className="section2">
            <h1 style={{ textAlign: "center" }}>650</h1>
            <h1 style={{ textAlign: "center" }}>Number of Medical </h1>
            <h1 style={{ textAlign: "center" }}>
              colleges in <strong>India</strong>
            </h1>
            {/* <Item>xs=8</Item> */}
          </Grid>
          <Grid item xs={12} className="section3">
            <h1>Service - Free predictor</h1>
            <h2>
              You need to make sure that your CRS score is above the minimum
              points score of your{" "}
              <Link href="#">
                <a>round of invitations</a>
              </Link>
              .
            </h2>
            <h3>1.Student Registration</h3>
            <h3 className="lefttext">Student Name</h3>
            <TextField
              id="outlined-basic"
              label="Enter your full name"
              variant="outlined"
            />
            <h3 className="lefttext">Select your Gender</h3>
            <Autocomplete
              id="disabled-options-demo"
              options={timeSlots}
              getOptionDisabled={(option) =>
                option === timeSlots[0] || option === timeSlots[2]
              }
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Select" />}
            />
            <h3 className="lefttext"> Enter your Mobile Number</h3>
            <TextField
              id="outlined-basic"
              label="10 Digit number"
              variant="outlined"
            />
            <h3 className="lefttext">Enter your Mobile Number</h3>
            <p>
              A 6 digit code has been sent to:<br></br>
              <strong>95987654678</strong>
            </p>
            <h3>Enter your Email Address</h3>
            <TextField id="outlined-basic" variant="outlined" />
            <h3>Enter the verification code here</h3>
            <TextField id="outlined-basic" variant="outlined" />
            <p>
              A 6 digit code has been sent to:<br></br>{" "}
            </p>
            <ul>
              <li>
                <Link href={"#"}>
                  <a>Resend on SMS</a>
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <a>Resend on call</a>
                </Link>
              </li>
            </ul>
            <h3>2. Enter your Domicile</h3>
            <h3 className="lefttext">[Senior Secondary] 12th Passing State</h3>
            <Autocomplete
              id="disabled-options-demo"
              options={timeSlots}
              getOptionDisabled={(option) =>
                option === timeSlots[0] || option === timeSlots[2]
              }
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Select" />}
            />
            <h3 className="lefttext">[High School] 10th Passing State</h3>
            <Autocomplete
              id="disabled-options-demo"
              options={timeSlots}
              getOptionDisabled={(option) =>
                option === timeSlots[0] || option === timeSlots[2]
              }
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Select" />}
            />
            <h3 className="lefttext">Permanent Address Postal Code</h3>
            <Autocomplete
              id="disabled-options-demo"
              options={timeSlots}
              getOptionDisabled={(option) =>
                option === timeSlots[0] || option === timeSlots[2]
              }
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Select" />}
            />
            <h3 className="lefttext">State</h3>
            <TextField id="outlined-basic" variant="outlined" />
            <h3 className="lefttext">City</h3>
            <TextField id="outlined-basic" variant="outlined" />
            <h3 className="lefttext">Area</h3>
            <TextField id="outlined-basic" variant="outlined" />
            <h3>3. Enter your Category</h3>
            <h3 className="lefttext">
              Whether Physically handicapped Candidate?
            </h3>
            <Autocomplete
              id="disabled-options-demo"
              options={timeSlots}
              getOptionDisabled={(option) =>
                option === timeSlots[0] || option === timeSlots[2]
              }
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Select" />}
            />
            <h3 className="lefttext">Whether Belongs to Armed Force?</h3>
            <Autocomplete
              id="disabled-options-demo"
              options={timeSlots}
              getOptionDisabled={(option) =>
                option === timeSlots[0] || option === timeSlots[2]
              }
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Select" />}
            />
            <h3 className="lefttext">Whether Orphan or Not?</h3>
            <Autocomplete
              id="disabled-options-demo"
              options={timeSlots}
              getOptionDisabled={(option) =>
                option === timeSlots[0] || option === timeSlots[2]
              }
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Select" />}
            />
            <h3 className="lefttext">Whether Single Child or Not?</h3>
            <Autocomplete
              id="disabled-options-demo"
              options={timeSlots}
              getOptionDisabled={(option) =>
                option === timeSlots[0] || option === timeSlots[2]
              }
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Select" />}
            />
            <h3 className="lefttext">Whether belongs to minority?</h3>
            <Autocomplete
              id="disabled-options-demo"
              options={timeSlots}
              getOptionDisabled={(option) =>
                option === timeSlots[0] || option === timeSlots[2]
              }
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Select" />}
            />
            <h3 className="lefttext">Whether eligible for Quota?</h3>
            <Autocomplete
              id="disabled-options-demo"
              options={timeSlots}
              getOptionDisabled={(option) =>
                option === timeSlots[0] || option === timeSlots[2]
              }
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Select" />}
            />
            <h3>4. Enter your Marks</h3>
            <TextField id="outlined-basic" variant="outlined" />
            <p>Your estimated rank between 1 lakh to 1,50 lakh</p>
            <input type={"submit"} value={"Calculate your score"}></input>
          </Grid>
         
          <Grid item xs={12} className="section4">
            <p>
              A college availability graph can be used to measure the
              availability of college courses for a given semester. This graph
              can be used to show the availability of courses offered by a
              particular college or university, as well as the availability of
              courses in a specific subject area.
            </p>
            <h2>Data Analysis's of NEET Predictor </h2>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <p>
              <strong>NOTE: </strong>The contents of a college admission list
              will vary depending on the college and the type of admissions
              process. Generally, a college admission list will include
              information about each student who has been accepted to the
              college, such as their name, address, contact information, test
              scores, and other admissions criteria that were used to make the
              decision. Depending on the college, the list may also include the
              student's major, any scholarships or financial aid that have been
              awarded, and any special programs or services that the student has
              been accepted into
            </p>
          </Grid>
          <div className="section5">
          <h2>Test List</h2>
           <table>
            <tr>
            <th>State</th>
            <th>No. of College</th>
            <th>
            <h3>Select the Colleges</h3>
              <table className="collegetable">
                <tr>
                  <th><input type="checkbox" /></th>
                <th>Gov.</th>
                <th>Pvt.</th>
                <th>Dem.</th>
                </tr>
              </table>
            </th>
            </tr>
            <tr>
              <td>Punjab</td>
              <td>30 College</td>
              <td>
              <table className="collegetable">
                <tr>
                  <td><input type="checkbox" /></td>
             <td>34</td>
             <td>56</td>
             <td>23</td>
                </tr>
              </table>
              </td>
            </tr>
            <tr>
            <td>Bangalore</td>
              <td>78 College</td>
              <td>    <table className="collegetable">
                <tr>
                <td><input type="checkbox" /></td>
             <td>34</td>
             <td>56</td>
             <td>23</td>
                </tr>
              </table></td>
            </tr>
            <tr>
            <td>Bhopal</td>
              <td>45 College</td>
              <td>    <table className="collegetable">
                <tr>
                <td><input type="checkbox" /></td>
             <td>34</td>
             <td>56</td>
             <td>23</td>
                </tr>
              </table></td>
            </tr>
            <tr>
            <td>Haryana</td>
              <td>19 College</td>
              <td>    <table className="collegetable">
                <tr>
                <td><input type="checkbox" /></td>
             <td>34</td>
             <td>56</td>
             <td>23</td>
                </tr>
              </table></td>
            </tr>
           </table>
          </div>

          {/* <Grid item xs={12} className="section5">
            <h2>Test List</h2>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>State</TableCell>
                    <TableCell align="right">No. of College</TableCell>
                    <TableCell align="right" className="selection">
                      {" "}             
                      Select the Colleges
                      <TableBody>
                        <TableRow className="select">
                          
                          <TableCell>
                          <span>

<Checkbox />      
</span>
                          </TableCell>
                          <TableCell>
                          Gov.
                          </TableCell>
                          <TableCell>
                          Pvt.
                          </TableCell>
                          <TableCell>
                          Dem.
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="td" scope="row">
                        {`row.name`}
                      </TableCell>
                      <TableCell align="right">{`row.calories cdv df`}</TableCell>
                      <TableBody>
                        <TableRow>
                          
                          <TableCell>
                          <span>

<Checkbox />      
</span>
                          </TableCell>
                          <TableCell>
                          34
                          </TableCell>
                          <TableCell>
                          56
                          </TableCell>
                          <TableCell>
                         23
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid> */}
          <Grid item xs={12} className="section6">
            <div className="lastsection">
            <div className="cartsummary">
                <h3>Cart Summary</h3>
                <ul>
                  <li>
                    {" "}
                    <input type={"radio"} />
                    All states{" "}
                  </li>
                  <li>???499</li>
                </ul>
                <ul>
                  <li>
                    {" "}
                    <input type={"radio"} />1 state
                  </li>
                  <li>???199</li>
                </ul>
                <ul>
                  <li>
                    {" "}
                    <input type={"radio"} />2 state
                  </li>
                  <li>???299</li>
                </ul>
                <ul>
                  <li>
                    {" "}
                    <input type={"radio"} />2 marks
                  </li>
                  <li>???699</li>
                </ul>
                <ul>
                  <li>
                    {" "}
                    <input type={"radio"} />4 marks
                  </li>
                  <li>???899</li>
                </ul>
                <ul>
                  <li className="subtotal">SUBTOTAL</li>
                  <li className="subtotal1">???499</li>
                </ul>
                <button>Checkout</button>
              </div>
               <div className="summarycontent">
                <p>
                  In order to find out which colleges accept applicants with
                  good credit scores, you should contact each school directly to
                  inquire about their admissions policies and what kind of
                  credit score they look for. Additionally, you can look for
                  colleges that are known for being ???credit friendly,??? which
                  means that they don???t require a credit check as part of their
                  admissions process. Finally, you can research scholarship and
                  grant programs that are specifically designed for students
                  with good credit scores.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="section20">
      <GraphSidebar />
      </div>
     </div>
      </Container>
    <Footer />
    </>
  );
}

export default App;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "L??on: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL??E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Am??lie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];

const timeSlots = Array.from(new Array(24 * 2)).map(
  (_, index) =>
    `${index < 20 ? "0" : ""}${Math.floor(index / 2)}:${
      index % 2 === 0 ? "00" : "30"
    }`
);
