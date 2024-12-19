<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enhanced Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background: #f4f4f9;
            color: #333;
        }

        header {
            background: #333;
            color: white;
            padding: 20px;
            text-align: center;
        }

        header h1 {
            margin: 0;
        }

        nav {
            display: flex;
            justify-content: center;
            gap: 20px;
            padding: 10px 0;
        }

        nav a {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }

        nav a:hover {
            text-decoration: underline;
        }

        .container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 20px;
        }

        .about, .portfolio, .contact {
            margin-bottom: 40px;
        }

        .about img {
            width: 150px;
            border-radius: 50%;
            display: block;
            margin: 0 auto 20px;
        }

        .portfolio-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .portfolio-item {
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.3s;
        }

        .portfolio-item img {
            width: 100%;
            display: block;
        }

        .portfolio-item:hover {
            transform: scale(1.05);
        }

        .contact form {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .contact input, .contact textarea {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }

        .contact button {
            padding: 10px;
            border: none;
            background: #333;
            color: white;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
        }

        .contact button:hover {
            background: #555;
        }

        footer {
            text-align: center;
            padding: 10px;
            background: #333;
            color: white;
        }

        footer a {
            color: #f4f4f9;
            text-decoration: none;
        }
    </style>
</head>

<body>
    <header>
        <h1>My Enhanced Portfolio</h1>
        <nav>
            <a href="#EDUCATION">EDUCATION</a>
            <a href="#EXPERIENCE">#EXPERIENCE</a>
            <a href="#PROJECTS">#PROJECTS</a>
        </nav>
    </header>

    <div class="container">
        <section id="about" class="about">
            <h2>About Me</h2>
            <img src="https://via.placeholder.com/150" alt="Profile Picture">
            <p>Hello! I'm a passionate developer skilled in creating stunning websites and applications. Welcome to my enhanced portfolio!</p>
        </section>

        <section id="portfolio" class="portfolio">
            <h2>Portfolio</h2>
            <div class="portfolio-gallery">
                <div class="portfolio-item">
                    <img src="https://www.researchgate.net/publication/319308562/figure/fig1/AS:731457291026434@1551404416389/Example-of-ensemble-prediction-graph-provided-to-participants-throughout-the-challenge.png" alt="Prediction Website">
                    <p>Project 1</p>
                </div>
                <div class="portfolio-item">
                    <img src="https://codingpixelmedia.s3-accelerate.amazonaws.com/2023/06/Rectangle-274-3.png" alt="Music App">
                    <p>Project 2</p>
                </div>
                <div class="portfolio-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Wg6p6el7N4wkOK8LuE0_qADN6EROQ3ZLbw&s " alt="Snake Game">
                    <p>Project 3</p>
                </div>
            </div>
        </section>

        <section id="contact" class="contact">
            <h2>Contact Me</h2>
            <form>
                <input type="text" placeholder="YASH BADOLA" required>
                <input type="email" placeholder="badolayash14@gmail.com" required>
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    </div>

    <footer>
        <p>&copy; 2024 My Portfolio | Designed with Yash</p>
    </footer>
</body>

</html>
