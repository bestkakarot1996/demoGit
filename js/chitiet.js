
import $ from "jquery";
import Swal from 'sweetalert2'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';

import "bootstrap";
// import { NguoiDung } from "../models/nguoidung";

import '../css/chitiet.css';

// Import kieu 3
import nguoiDung from '../models/nguoidung';
nguoiDung.ND;
nguoiDung.HT;
function getParamsFromURL(){
    var params = window.location.search.substr(1,).split('=');
    console.log(params)
    var courseId = params[1];
}
getParamsFromURL();

Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    type: 'error',
    confirmButtonText: 'Cool'
  })