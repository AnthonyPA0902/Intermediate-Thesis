﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace TravelService.Models;

public partial class Tour_Details_Image
{
    public int id { get; set; }

    public string name { get; set; }

    public string url { get; set; }

    public int tour_details_id { get; set; }

    public virtual Tour_Detail tour_details { get; set; }
}