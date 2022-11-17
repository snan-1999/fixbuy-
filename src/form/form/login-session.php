<?php
if (isset($_SESSION['username']) && $_SESSION['role'] == 0) {
?>
    <div className="dropdown col-3">
        <button className="btn btn-secondary btn-d" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <div className="text-capitalize ancor-container">
                    <div className="profile-icon"><img src=<?php if($_SESSION['user_image']!=null){echo "image/profile-image/".$_SESSION['user_image'];}else{echo "image/testo/1.png";} ?>></div>
                    <span><?php echo $_SESSION['username']; ?></span>
                </a></div>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item " href="profile.php?user_id=<?php echo $_SESSION['user_id']; ?> "> <i className="fas fa-user"></i>&nbsp;&nbsp;Profile</a></li>
            <li><a className="dropdown-item" href="form/logout.php"> <i className="fas fa-bars"></i>&nbsp;&nbsp;Logout</a></li>
            <li><a className="dropdown-item" href="membership.php"> <i className="fas fa-landmark"></i>&nbsp;&nbsp;membership</a></li>
            <!-- <li><a className="dropdown-item" href="#">Something else here</a></li> -->
        </ul>
    </div>
<?php } else { ?>
    <div className="col-1"><a href="form/login.php">LOGIN/SIGNUP</a></div>
<?php }
?>