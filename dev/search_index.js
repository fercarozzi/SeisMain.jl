var documenterSearchIndex = {"docs":
[{"location":"man/guide/#Package-guide-1","page":"Guide","title":"Package guide","text":"","category":"section"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"SeisMain.jl provides seismic data reading, writing and handling tools.  Format conversion is available between SEIS data and SEGY, and SU.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"With SeisMain.jl installed we can do a simple example showing format conversion","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"using SeisMain, SeisPlot\nrun(`mkdir -p data`)\ndownload(\"http://seismic.physics.ualberta.ca/data/616_79_PR.SGY\", \"data/616_79_PR.SGY\")\nSegyToSeis(\"data/616_79_PR.SGY\", \"data/616_79_PR.seis\")\nSeisWindow(\"data/616_79_PR.seis\", \"data/616_79_PR_2s.seis\", key= [\"t\"], minval=[0.0], maxval=[2.0])\nd, head, extent = SeisRead(\"data/616_79_PR_2s.seis\")\n\nSeisPlotTX(d, title=\"Seismic Plot Example\", cmap=\"PuOr\", wbox=9,ylabel=\"Time(s)\",xlabel=\"Trace Number(index)\",dy=extent.d1)","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"(Image: plot1)","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"In the above example, we first download the data, then convert the data from SU data format to SEIS format, finally the data are plotted. ","category":"page"},{"location":"lib/public/#Public-Documentation-1","page":"Public","title":"Public Documentation","text":"","category":"section"},{"location":"lib/public/#","page":"Public","title":"Public","text":"Documentation for public SeisMain.jl public interface","category":"page"},{"location":"lib/public/#Public-interface-1","page":"Public","title":"Public interface","text":"","category":"section"},{"location":"lib/public/#","page":"Public","title":"Public","text":"SegyToSeis\nSeisRead\nSeisReadHeaders\nSeisWrite\nSeisWriteHeaders\nSeisCopy\nSeisHeaderInfo\nSeisToSegy\nSeisRemove\nSeisWindow\nSeisPatch\nSeisUnPatch\nSeisGeometry\nSeisBinHeaders\nSeisBinData","category":"page"},{"location":"lib/public/#SeisMain.SegyToSeis","page":"Public","title":"SeisMain.SegyToSeis","text":"SegyToSeis(filename_in,filename_out;<keyword arguments>)\n\nConvert SEGY or SU data to seis format. The function needs input and output filenames.\n\nArguments\n\nformat=\"segy\" : Options are segy or su\nswap_bytes=true : If the flag equals true, the function swaps bytes\ninput_type=\"ibm\" : Options are ibm or ieee\n\nCredits: AS, 2015\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#SeisMain.SeisRead","page":"Public","title":"SeisMain.SeisRead","text":"SeisRead(filename;<keyword arguments>)\n\nRead seismic data from a given filename in seis format. The format is comprised of three elements:\n\na text file (data extent) with geometry information\na binary file containing data (@data@)\na binary file containing headers (@headers@)\n\nKeyword arguments\n\ngroup=\"all\" : Options are all, some or gather\nkey=[\"imx\",\"imy\"]\nitrace=1 : Number of trace where the function starts reading\nntrace=10000 : Total number of traces to read\n\nOut\n\nd: data as 2d array\nh: headers as 1d array\nextent: extent of the data (try fieldnames(Extent) to see the information this contains)\n\nExample\n\nd,h,ext = SeisRead(filename)\n\nCredits: AS, 2015\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#SeisMain.SeisReadHeaders","page":"Public","title":"SeisMain.SeisReadHeaders","text":"SeisReadHeaders(filename;<keyword arguments>)\n\nRead the headers of a input file in seis format\n\nArguments\n\ngroup=\"all\" : Options are all, some or gather\nkey=[]\nitrace=1 : Number of trace where the function starts reading\nntrace=100 : Total number of traces to read\n\nExample\n\nh = SeisRead(filename)\n\nCredits: AS, 2015\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#SeisMain.SeisWrite","page":"Public","title":"SeisMain.SeisWrite","text":"SeisWrite(filename,d,h,extent;<keyword arguments>)\n\nWrite seismic data in seis format\n\nArguments\n\nfilename : Name of file to write/generate\nd: seismic data\nh::Array{Header,1}: headers as 1d array with elements of type Header\nextent::Extent : extent of the data (try names(Extent) to see the information this contains)\nitrace=1 : First trace number to write\n\nCredits: AS, 2015\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#SeisMain.SeisWriteHeaders","page":"Public","title":"SeisMain.SeisWriteHeaders","text":"SeisWriteHeaders(filename,h;<keyword arguments>)\n\nWrite seismic headers in seis format\n\nArguments\n\nitrace=1 : First trace number to write\nupdate_tracenum=true \n\nCredits: AS, 2015\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#SeisMain.SeisCopy","page":"Public","title":"SeisMain.SeisCopy","text":"SeisCopy(in,out)\n\nCopy a seis input file to a seis output file. In and out should be of type AbstractString\n\nCredits: AS, 2015\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#SeisMain.SeisHeaderInfo","page":"Public","title":"SeisMain.SeisHeaderInfo","text":"SeisHeaderInfo(filename;<keyword arguments>)\n\nPrint Seis header information to screen. The input is the name of the data file\n\nArguments\n\nntrace=100000 : Number of traces to analyze\n\nCredits: AS, 2015\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#SeisMain.SeisToSegy","page":"Public","title":"SeisMain.SeisToSegy","text":"SeisToSegy(filename_in,filename_out;<keyword arguments>)\n\nConvert seis data to SU or SEGY format. The function needs input and output filenames.\n\nArguments\n\nsu=true : If the flag equals true, converts tu SU format, otherwise to SEGY format\n\nCredits: AS, 2015\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#SeisMain.SeisRemove","page":"Public","title":"SeisMain.SeisRemove","text":"SeisRemove(filename)\n\nDelete a seis file (deletes the text file, binary data file, and binary header file if there is one)\n\nCredits: AS, 2015\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#SeisMain.SeisWindow","page":"Public","title":"SeisMain.SeisWindow","text":"SeisWindow(in,out;<keyword arguments>)\n\nWindow a seis file using header words.\n\nArguments\n\nin::String: filename of input\nout::String: filename of output\n\nKeyword arguments\n\nkey=[]\nminval=[]\nmaxval=[]\n\nnote that windowing along the time axis is achieved by using the key \"t\".\n\nCredits: AS, 2015\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#SeisMain.SeisPatch","page":"Public","title":"SeisMain.SeisPatch","text":"  SeisPatch(in,out;<keyword arguments>)\n\nCreates overlapping 5d patches from a 5d volume\n\nArguments\n\nin::String: input filename (data should have grid information in headers)\nout::String: prefix for output filenames\n\nKeyword arguments\n\nstyle=\"sxsygxgy\": bin style. Options: \"mxmyhxhy\",\"mxmyhaz\",\"sxsyhxhy\",\"gxgyhxhy\",\"sxsyhaz\",\"gxgyhaz\"\nmin_isx=0,max_isx=0,min_isy=0,max_isy=0: grid extreme values for sources\nmin_igx=0,max_igx=0,min_igy=0,max_igy=0: grid extreme values for receivers\nmin_imx=0,max_imx=0,min_imy=0,max_imy=0: grid extreme values for midpoints\nmin_ihx=0,max_ihx=0,min_ihy=0,max_ihy=0: grid extreme values for offsets\nmin_ih=0,max_ih=0,min_iaz=0,max_iaz=0: grid extreme values for azimuth and offset\nit_WL=9e9,it_WO=0 : length and overlapping samples in time patches\nix1_WL=9e9,ix1_WO=0:length and overlapping samples in first space dimension\nix2_WL=9e9,ix2_WO=0,ix3_WL=9e9,ix3_WO=0,ix4_WL=9e9,ix4_WO=0\n\nOutput\n\nfilename,npatch: String Array with the file name of the data patches, number of patches created\n\nCredits: A. Stanton\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#SeisMain.SeisUnPatch","page":"Public","title":"SeisMain.SeisUnPatch","text":"SeisUnPatch(in,out;<keyword arguments>)\n\nReconstruct a 5D data volume from a set of 5D data patches.\n\nArguments\n\nin::Array{String,1}: array containing filename of patches\nout::String: filename for reconstructed volume\n\nKeyword arguments\n\nstyle=\"sxsygxgy\": bin style. Options: \"mxmyhxhy\",\"mxmyhaz\",\"sxsyhxhy\",\"gxgyhxhy\",\"sxsyhaz\",\"gxgyhaz\"\nmin_isx=0,max_isx=0,min_isy=0,max_isy=0: grid extreme values for sources\nmin_igx=0,max_igx=0,min_igy=0,max_igy=0: grid extreme values for receivers\nmin_imx=0,max_imx=0,min_imy=0,max_imy=0: grid extreme values for midpoints\nmin_ihx=0,max_ihx=0,min_ihy=0,max_ihy=0: grid extreme values for offsets\nmin_ih=0,max_ih=0,min_iaz=0,max_iaz=0: grid extreme values for azimuth and offset\nit_WL=9e9,it_WO=0 : length and overlapping samples in time patches\nix1_WL=9e9,ix1_WO=0:length and overlapping samples in first space dimension\nix2_WL=9e9,ix2_WO=0,ix3_WL=9e9,ix3_WO=0,ix4_WL=9e9,ix4_WO=0\nnt=0: time samples of reconstructed cube\nang=90: inline direction measured in degrees CC from East\ngamma=1: vp/vs ratio for PS Asymptotic Conversion Point gathers (use gamma=1 for PP data)\nosx=0,osy=0,ogx=0,ogy=0 : origin for source and receiver coordinate system\nomx=0,omy=0,ohx=0,ohy=0: origin for midpoint and offset coordinate system\noaz=0,oh=0 : origin for azimuth and offset coordinate system\ndsx=1,dsy=1,dgx=1,dgy=1: source and receiver step-size\ndmx=1,dmy=1,dhx=1,dhy=1: midpoint and offset step-size\ndh=1,daz=1: offset and azimuth step-size\n\nOutput\n\nIn file out, the 5D reconstructed volume is created.\n\nCredits: A. Stanton, F Carozzi, 2017\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#SeisMain.SeisGeometry","page":"Public","title":"SeisMain.SeisGeometry","text":"SeisGeometry(in;<keyword arguments>)\n\nUpdate headers with geometry information. Offsets and azimuths are calculated from source and receivers coordinates.\n\nArguments\n\nin: input filename\n\nKeyword arguments\n\nang=90: inline direction measured in degrees CC from East\ngamma=1: vp/vs ratio for PS Asymptotic Conversion Point gathers (use gamma=1 for PP data)\nosx=0,osy=0,ogx=0,ogy=0 : origin for source and receiver coordinate system\nomx=0,omy=0,ohx=0,ohy=0: origin for midpoint and offset coordinate system\noaz=0,oh=0 : origin for azimuth and offset coordinate system\ndsx=1,dsy=1,dgx=1,dgy=1: source and receiver step-size\ndmx=1,dmy=1,dhx=1,dhy=1: midpoint and offset step-size\ndh=1,daz=1: offset and azimuth step-size\n\nOutputs\n\nthe @headers@ file is updated with the following information:\n\nhx,hy,h,az,mx,my : calculated offset, azimuth and midpoint\nisx,isy,igx,igy,imx,imy,ihx,ihy,ih,iaz: calculated grid nodes for source and receiver position and midpoint, offset and azimuth.\n\nCredits: A. Stanton, 2017\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#SeisMain.SeisBinHeaders","page":"Public","title":"SeisMain.SeisBinHeaders","text":"SeisBinHeaders(in,out; <keyword arguments>)\n\nSequentially bin seismic headers using the available grid information.\n\nKeyword arguments should be consistent with SeisGeometry keyword arguments.\n\nArguments\n\nin: filename of input, irregularly sampled data\nout: filename of output, regularly sampled data\n\nKeyword arguments\n\nstyle=\"sxsygxgy\": bin style. Options: \"mxmyhxhy\",\"mxmyhaz\",\"sxsyhxhy\",\"gxgyhxhy\",\"sxsyhaz\",\"gxgyhaz\"\nang=90: inline direction measured in degrees CC from East\ngamma=1: vp/vs ratio for PS Asymptotic Conversion Point gathers (use gamma=1 for PP data)\nosx=0,osy=0,ogx=0,ogy=0 : origin for source and receiver coordinate system\nomx=0,omy=0,ohx=0,ohy=0: origin for midpoint and offset coordinate system\noaz=0,oh=0 : origin for azimuth and offset coordinate system\ndsx=1,dsy=1,dgx=1,dgy=1: source and receiver step-size\ndmx=1,dmy=1,dhx=1,dhy=1: midpoint and offset step-size\ndh=1,daz=1: offset and azimuth step-size\nmin_isx=0,max_isx=0,min_isy=0,max_isy=0: grid extreme values for sources\nmin_igx=0,max_igx=0,min_igy=0,max_igy=0: grid extreme values for receivers\nmin_imx=0,max_imx=0,min_imy=0,max_imy=0: grid extreme values for midpoints\nmin_ihx=0,max_ihx=0,min_ihy=0,max_ihy=0: grid extreme values for offsets\nmin_ih=0,max_ih=0,min_iaz=0,max_iaz=0: grid extreme values for azimuth and offset\nntrace=10000: maximum number of traces processed at a time\n\nOutput\n\nIn file out@headers@, binned headers are saved.\n\nCredits: Aaron Stanton,2017\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#SeisMain.SeisBinData","page":"Public","title":"SeisMain.SeisBinData","text":"SeisBinData(in,out; <keyword arguments>)\n\nSequentially bin seismic data using already binned trace headers. Input arguments should be consistent with SeisBinHeaders input arguments. See also: SeisBinHeaders\n\nArguments\n\nin: filename of input, irregularly sampled data\nout: filename of output, regularly sampled data\n\nKeyword arguments\n\nstyle=\"sxsygxgy\": bin style. Options: \"mxmyhxhy\",\"mxmyhaz\",\"sxsyhxhy\",\"gxgyhxhy\",\"sxsyhaz\",\"gxgyhaz\"\nang=90: inline direction measured in degrees CC from East\ngamma=1: vp/vs ratio for PS Asymptotic Conversion Point gathers (use gamma=1 for PP data)\nosx=0,osy=0,ogx=0,ogy=0 : origin for source and receiver coordinate system\nomx=0,omy=0,ohx=0,ohy=0: origin for midpoint and offset coordinate system\noaz=0,oh=0 : origin for azimuth and offset coordinate system\ndsx=1,dsy=1,dgx=1,dgy=1: source and receiver step-size\ndmx=1,dmy=1,dhx=1,dhy=1: midpoint and offset step-size\ndh=1,daz=1: offset and azimuth step-size\nmin_isx=0,max_isx=0,min_isy=0,max_isy=0: grid extreme values for sources\nmin_igx=0,max_igx=0,min_igy=0,max_igy=0: grid extreme values for receivers\nmin_imx=0,max_imx=0,min_imy=0,max_imy=0: grid extreme values for midpoints\nmin_ihx=0,max_ihx=0,min_ihy=0,max_ihy=0: grid extreme values for offsets\nmin_ih=0,max_ih=0,min_iaz=0,max_iaz=0: grid extreme values for azimuth and offset\nntrace=10000: maximum number of traces processed at a time\n\nOutput\n\nIn file out, the binned data is saved.\n\nCredits: Aaron Stanton, 2017\n\n\n\n\n\n","category":"function"},{"location":"#SeisMain.jl-1","page":"Home","title":"SeisMain.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"A package to read, write and process seismic data in Julia ","category":"page"},{"location":"#Package-Features-1","page":"Home","title":"Package Features","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Convert data to a simple format\nWindow data according to defined keywords\nSort data\nBin seismic volumes\nOrganize data into patches to process independently\nOnce your data is processed, unpatch to a single volume","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"SeisMain, from the SeismicJulia project, can be installed using Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and run ","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Pkg> add SeisMain","category":"page"}]
}
