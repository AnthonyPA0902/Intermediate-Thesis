﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace TravelService.Models;

public partial class HOTEL
{
    public int id { get; set; }

    public string name { get; set; }

    public string adresss { get; set; }

    public virtual ICollection<TOUR> TOURs { get; set; } = new List<TOUR>();
}