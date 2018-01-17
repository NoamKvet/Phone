-- [[-----------------------------------------------------------------------

	-- ActionMenu By WolfKnight
	-- Script By Kvetz
	-- Thanks Titch For The Help!

-- ---------------------------------------------------------------------]]--

local phonemenuEnabled = false 

RegisterNetEvent("Togglephone")
AddEventHandler("Togglephone", function()
	Togglephone()
end)

function Togglephone()
	Citizen.Trace("PHONE")
	phonemenuEnabled = not phonemenuEnabled
	if ( phonemenuEnabled ) then 
		SetNuiFocus( true, true ) 
		SendNUIMessage({
			showPhoneMenu = true 
		})
	else 
		SetNuiFocus( false )
		SendNUIMessage({
			showPhoneMenu = false
		})
	end 
end 


-- NUI Callback Methods

RegisterNUICallback('close', function(data, cb)  
  Togglephone()
  cb('ok')
end)

-- NUI Civilian Callback

RegisterNUICallback('civLoad', function(data, cb) 
  	chatPrint( "You are a civilian! go rob some places!" )
	TriggerEvent("yt:civilian", source)
  	Togglephone()
  	cb('ok')
end)






