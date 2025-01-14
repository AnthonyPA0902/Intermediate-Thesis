CREATE DATABASE TravelServiceManagementDB
GO
USE TravelServiceManagementDB
GO
/****** Object:  Table [dbo].[Category]    Script Date: 30/04/2024 15:50:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](20) NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 30/04/2024 15:50:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](30) NULL,
	[dob] [date] NULL,
	[address] [nvarchar](50) NULL,
	[phone] [nvarchar](11) NULL,
	[email] [nvarchar](30) NULL,
	[username] [nvarchar](30) NULL,
	[password] [nvarchar](20) NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customer_Order]    Script Date: 30/04/2024 15:50:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer_Order](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[date] [date] NULL,
	[payment] [nvarchar](30) NULL,
	[total] [bigint] NULL,
	[num_of_people] [int] NULL,
	[customer_id] [int] NOT NULL,
	[tour_id] [int] NOT NULL,
 CONSTRAINT [PK_Customer_Order] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employee]    Script Date: 30/04/2024 15:50:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employee](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](30) NULL,
	[dob] [date] NULL,
	[address] [nvarchar](50) NULL,
	[phone] [nvarchar](11) NULL,
	[email] [nvarchar](30) NULL,
	[username] [nvarchar](30) NULL,
	[password] [nvarchar](20) NULL,
 CONSTRAINT [PK_Employee] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tour]    Script Date: 30/04/2024 15:50:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tour](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[price] [bigint] NULL,
	[duration] [nvarchar](30) NULL,
	[picture] [nvarchar](100) NULL,
	[category_id] [int] NOT NULL,
 CONSTRAINT [PK_Tour] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tour_Details]    Script Date: 30/04/2024 15:50:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tour_Details](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[code] [nvarchar](20) NULL,
	[begin_date] [date] NULL,
	[end_date] [date] NULL,
	[transport] [nvarchar](50) NULL,
	[start_destination] [nvarchar](30) NULL,
	[tour_id] [int] NOT NULL,
 CONSTRAINT [PK_Tour_Details] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tour_Details_Image]    Script Date: 30/04/2024 15:50:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tour_Details_Image](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](100) NULL,
	[url] [nvarchar](100) NULL,
	[tour_details_id] [int] NOT NULL,
 CONSTRAINT [PK_Tour_Details_Image] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Customer_Order]  WITH CHECK ADD  CONSTRAINT [FK_Customer_Order_Customer] FOREIGN KEY([customer_id])
REFERENCES [dbo].[Customer] ([id])
GO
ALTER TABLE [dbo].[Customer_Order] CHECK CONSTRAINT [FK_Customer_Order_Customer]
GO
ALTER TABLE [dbo].[Customer_Order]  WITH CHECK ADD  CONSTRAINT [FK_Customer_Order_Tour] FOREIGN KEY([tour_id])
REFERENCES [dbo].[Tour] ([id])
GO
ALTER TABLE [dbo].[Customer_Order] CHECK CONSTRAINT [FK_Customer_Order_Tour]
GO
ALTER TABLE [dbo].[Tour_Details]  WITH CHECK ADD  CONSTRAINT [FK_Tour_Details_Tour] FOREIGN KEY([tour_id])
REFERENCES [dbo].[Tour] ([id])
GO
ALTER TABLE [dbo].[Tour_Details] CHECK CONSTRAINT [FK_Tour_Details_Tour]
GO
ALTER TABLE [dbo].[Tour_Details_Image]  WITH CHECK ADD  CONSTRAINT [FK_Tour_Details_Image_Tour_Details] FOREIGN KEY([tour_details_id])
REFERENCES [dbo].[Tour_Details] ([id])
GO
ALTER TABLE [dbo].[Tour_Details_Image] CHECK CONSTRAINT [FK_Tour_Details_Image_Tour_Details]
GO
