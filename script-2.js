<!DOCTYPE html>
<html>
<head>
  <title>Face Mash</title>
  <style>
    /* Basic styling */
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 20px;
    }
    h1 {
      color: #3b5998;
    }
    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin: 10px;
    }
    button {
      padding: 10px 20px;
      background-color: #3b5998;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
  <script>
    // Array of sample profile images
    var images = [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      // Add more images here
    ];
  
    // Function to select random images
    function selectRandomImages() {
      var img1 = document.getElementById('img1');
      var img2 = document.getElementById('img2');
      var randomIndex1 = Math.floor(Math.random() * images.length);
      var randomIndex2 = Math.floor(Math.random() * images.length);
      
      img1.src = images[randomIndex1];
      img2.src = images[randomIndex2];
    }
  </script>
</head>
<body>
  <h1>Face Mash</h1>
  <h3>Choose the more appealing face:</h3>
  <div>
    <img id="img1" src="" alt="Image 1">
    <img id="img2" src="" alt="Image 2">
  </div>
  <br>
  <button onclick="selectRandomImages()">Next</button>
  
  <script>
    // Initial random image selection on page load
    selectRandomImages();
  </script>
</body>
</html>
