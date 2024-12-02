<?php
$con=mysqli_connect("localhost","root")
or die("Could not connect the server" .mysqli_connect_error());
echo "connect to the server <br>";
mysqli_select_db($con, "register")
or die("Could not connect to the database" .mysqli_error($con));
echo "connect to the database <br>";


extract($_POST);


if (isset($submit)) {
    
    $dpI = mysqli_query ($con, "INSERT into ticket 
    values ('$name', '$phone', '$email', '$textarea')")
    or die("Could not insert into table. " .mysqli_error($con));
    echo "".mysqli_affected_rows($con)." record(s) added.";


}
if (mysqli_affected_rows($con) > 0) {
    echo "Record successfully inserted.";
} else {
    echo "Failed to insert record.";
}

    
$dbP = mysqli_query($con, "select * from ticket")
    or die("Could not find the table.<br>" .mysqli_error($con));
    echo "Table found<br><br>";
    echo "<table width='50%' border='1'>";
    echo "<tr><th>Name</th><th>Email</th><th>Phone</th><th>feedback</th></tr>";
    while ($row = mysqli_fetch_array($dbP))
    {
        echo "<tr><td>{$row["Name"]}</td>";
        echo "<td>{$row["Email"]}</td>";
        echo "<td>{$row["Phone"]}</td>";
        echo "<td>{$row["feedback"]}</td>";
    }
    echo "</table><br><br>";

mysqli_close($con);
?>


